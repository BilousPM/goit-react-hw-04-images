import { Rings } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

export default function Loader() {
  return (
    <div className={css.overlay}>
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
