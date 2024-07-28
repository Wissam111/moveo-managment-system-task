export type ModalProps = {
  open?: boolean;
  showModal: () => void;
  closeModal: () => void;
};

export type NetWorkProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  contentType?: string;
};

export type PaginationProps = {
  search?: string;
  page?: number;
  pageSize?: number;
};

export type SigninProps = {
  email: string;
  password: string;
};
