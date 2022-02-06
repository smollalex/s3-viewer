import { ImageProps } from '@components/Item';

export type ModalProps = {
  item: ImageProps | null,
  isModalOpen: boolean,
  setIsModalOpen: (flag: boolean) => void
}
