import React from "react";
import PropTypes from 'prop-types';

function Game({ name, picture, rating }) {
  return (
    <div>
      <h2>Game Name: {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const gameList = [
  {
    id : 1,
    name : 'Sudden Attack',
    image : 'https://lh3.googleusercontent.com/proxy/1Ob3icdo_KJ6oHu-4gA_Foh4fAntiJ6IYX8r--sy2mBbjlJAktQjPfT4X438M4nzhlj4J-e8fmqufm2sKz4pHrNJbrcMnjhqtxiYfBlFd6Meo7g',
    rating : 5,
  },
  {
    id : 2,
    name : 'Battle Grounds',
    image : 'https://www.theguru.co.kr/data/photos/20210312/art_16163695877701_7b18d5.jpg',
    rating : 4.8,
  },
  {
    id : 3,
    name : 'The Forest',
    image : 'https://i.ytimg.com/vi/yV4f1jQRlDM/maxresdefault.jpg',
    rating : 3.9,
  },
];


function App() {
  return (
    <div>
      {gameList.map(dish =>
          (<Game key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Game.PropTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};
// .isRequired 는 필요하다는 의미 입력이 필요한 혹은 아직 입력하지 않는 값에는 적용하지 않는 것이 좋다. 
// a.k.a 좋아요, 조회수, 평점 등.. 


export default App;
