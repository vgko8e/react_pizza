import s from "./NotFoundBlock.module.scss";

const NotFound = () => {
  return (
    <div className={s.block}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
        <p className={s.descp}>
          Unfortunately, such a page does not exist on our website
        </p>
      </h1>
    </div>
  );
};

export default NotFound;
