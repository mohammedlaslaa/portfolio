import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './style.module.scss';

function Home() {
  return (
    <div className="row md-col-10 m-0">
      <div className="col-12 col-md-6 text-center d-flex flex-column">
        <img
          src="/images/avatar.png"
          alt=""
          className={`img-responsive ${styles.avatar}`}
        />
        <a
          href="https://stories.freepik.com/web"
          className="font-italic font-weight-light text-dark"
        >
          Illustration by Freepik Stories
        </a>
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center">
        <Typewriter
          options={{
            wrapperClassName: styles.wrapper,
            cursorClassName: styles.cursor,
          }}
          onInit={(typewriter: any) => {
            typewriter.typeString('< Laslaa Mohammed />').start();
          }}
        />
      </div>
    </div>
  );
}

export default Home;
