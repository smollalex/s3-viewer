import React, { useState, useEffect } from 'react';
import { AWSWithConf, albumBucketName } from '../../awsconfig';
import { Item, ImageProps } from '../Item';
import { Wrapper, Title, Grid, Empty } from './styled';

type AlbumComponentProps = {
  title: string,
  openModal: any;
}
export const Album: React.FC<AlbumComponentProps> = (props) => {
  const {
    title,
    openModal
  } = props;

  const [items, setItems] = useState<ImageProps[]>();

  const itemList: ImageProps[] = [];
  const albumPhotosKey = encodeURIComponent(title) + '/';
  const Params = { Bucket: albumBucketName, Prefix: albumPhotosKey };
  const S3 = new AWSWithConf.S3({ params: Params });

  useEffect(() => {
    async function getAlbumItems() {
      const res = S3.listObjects(Params);
      const data = await S3.makeUnauthenticatedRequest('listObjectsV2').promise();

      const href = res.httpRequest.endpoint.href;
      const bucketUrl = href.replace('https', 'http') + albumBucketName + '/';

      data.Contents?.forEach((photo: { Key: string; ETag: string }, index: number) => {
        if (index > 0) {
          const photoKey = photo.Key;
          const filename = photoKey.substring(data.Prefix.length);
          const tag = photo.ETag.substring(1, photo.ETag.length-1);

          let photoUrl = '';
          if (photoKey) {
            photoUrl = bucketUrl + encodeURIComponent(photoKey);
            itemList.push({ url: photoUrl, filename:  filename, tag: tag });
          }
        }
      });
      setItems(itemList);
    }
    getAlbumItems();
  }, []);

  const onClickHandler = (item: ImageProps) => {
    openModal(item);
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      {items && items?.length > 0 ? (
        <Grid>
          {items?.map((item, index) => {
            return (
              <Item item={item} key={index} onClick={onClickHandler}/>
            )
          })}
        </Grid>
      ) : (
        <Empty>
          Album is empty
        </Empty>
      )}
    </Wrapper>
  );
}
