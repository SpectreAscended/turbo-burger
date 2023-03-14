import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import burgerImg from '../../assets/burger-spread.jpg';
import './aboutContent.scss';

const AboutContent: React.FC = () => {
  const userName = useSelector<RootState>(
    state => state.auth.currentUser.userName
  ) as string;

  const output = userName ? (
    <h1>Welcome back, {userName}!</h1>
  ) : (
    <h1>Welcome to Turbo Burger!</h1>
  );
  return (
    <>
      {output}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis a
        vitae voluptatem iusto voluptas, eum sit dolorem aperiam provident
        veniam minus est modi nobis cum labore, alias quaerat velit
        perspiciatis. Nesciunt necessitatibus reprehenderit reiciendis
        voluptates officiis! Vel rerum hic atque amet debitis, excepturi quae
        reprehenderit, aliquid minima ab vitae recusandae.
      </p>
      <div
        style={{
          width: '20rem',
          margin: '2rem auto',
        }}
      >
        <img src={burgerImg} alt="Burger" style={{ width: '100%' }} />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ratione sed
        enim ipsam exercitationem, iste voluptatum eligendi quod et reiciendis,
        commodi harum aliquam ab dolores vel ut odit nesciunt obcaecati.
        Mollitia sint assumenda placeat in, eveniet maiores reiciendis nemo
        voluptate expedita repudiandae dignissimos aspernatur, explicabo
        suscipit unde dolore amet eum fugit a labore possimus? Possimus
        cupiditate quis quisquam dolorem culpa? Odit suscipit quae quaerat ut
        optio incidunt perferendis nobis sit est, recusandae laudantium modi
        corrupti nesciunt facere aperiam ducimus? Facilis dolor, incidunt
        blanditiis error explicabo eum ad veritatis illum hic. Porro vitae
        corporis nulla, impedit hic consequuntur qui iure, sequi laudantium
        rerum officia! Deserunt ducimus voluptatem architecto laborum
        dignissimos consequatur tempore praesentium minus totam quos libero
        voluptate, asperiores ea cum. Molestias, itaque accusantium quidem
        dolores architecto deserunt magnam sapiente excepturi dicta! Dolore
        tenetur tempora at beatae consequuntur consequatur, amet ipsum natus
        alias, illo assumenda nesciunt, voluptates sed suscipit quae impedit.
        Tempora ipsum architecto aspernatur in sit incidunt alias impedit, iusto
        voluptatibus quisquam beatae quam a ipsa laudantium expedita doloribus
        ullam accusantium vero rerum accusamus soluta quo ratione nostrum?
        Inventore, dolor? Maiores laboriosam aspernatur perspiciatis sint nam
        doloribus soluta accusamus neque exercitationem nisi, harum ipsum,
        libero cumque quam voluptatem quidem delectus blanditiis eum dolorem
        dicta. Quasi modi placeat earum nesciunt ut. Sequi unde excepturi
        accusantium iusto dolorem vitae laborum aspernatur officia culpa,
        adipisci harum itaque magni doloremque a quaerat velit soluta deleniti
        tempore ipsum quisquam? Aliquid, ducimus? Atque quibusdam error rerum.
        Praesentium atque hic totam. Aperiam ullam vero deserunt repudiandae
        quas nihil facere, velit, magnam, laborum doloremque optio quaerat unde.
        Dolores aut laborum quia esse et illo possimus asperiores iure non?
        Deserunt iusto fugiat, repudiandae sapiente tempore atque repellat magni
        laboriosam, amet quasi corrupti in error. Odit maiores repellat aliquid
        maxime, ab voluptate dicta facilis magnam dolores iste temporibus magni
        totam.
      </p>
    </>
  );
};

export default AboutContent;
