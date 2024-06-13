import { Modal } from "antd";

const CommonModal = ({ title, content, visible, onCancel,footer,width  }) => {
    return (
      <Modal
      width={width}
      
        title={title}
        visible={visible}
        onCancel={onCancel}
        footer={footer}
      >
        <p>{content}</p>
      </Modal>
    );
  };
  
  export default CommonModal;
  