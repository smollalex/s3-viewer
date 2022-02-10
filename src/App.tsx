import React, { useEffect, useState } from 'react';
import { AWSWithConf, albumBucketName } from './awsconfig';
import { Album, AlbumProps } from './components/Album';
import { Modal } from './components/Modal';
import { ImageProps } from '@components/Item';
import { Filter } from './components/Filter';

export const App = () => {
  const [albums, setAlbums] = useState<AlbumProps[]>();
  const [allAlbums, setAllAlbums] = useState<AlbumProps[]>();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem ] = useState<ImageProps | null>(null);

  const Params = { Bucket: albumBucketName, Delimiter: '/' };
  const S3 = new AWSWithConf.S3({ params: Params });

  useEffect(() => {
    async function getAllAlbums() {
      const data = await S3.makeUnauthenticatedRequest('listObjectsV2').promise();
      const albumList: AlbumProps[] = [];
      if (selectedFilter == 'all') {
        data.CommonPrefixes?.forEach((commonPrefix: { Prefix: any; }) => {
          const prefix = commonPrefix.Prefix;
          if (!prefix) return;
          const name = decodeURIComponent(prefix.replace('/', ''));
          albumList.push({ title: name });
          return;
        });
        setAllAlbums(albumList);
      } else {
        albumList.push({ title: selectedFilter});
      }
      setAlbums(albumList);
    }
    getAllAlbums();

  }, [selectedFilter]);

  const openModalHandler = (item: ImageProps) => {
    document.body.classList.add('modal-open');
    setIsModalOpen(true);
    setSelectedItem(item);
  }

  return (
    <>
      <Filter filters={allAlbums} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      {albums?.map(({ title }) => (
        <Album
          title={title}
          key={title}
          openModal={openModalHandler}
        />
      ))}
      <Modal item={selectedItem} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
}

