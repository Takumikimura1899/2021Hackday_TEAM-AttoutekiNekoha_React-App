import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './PostComplain.css' 

const PostComplain = () => {
  const [text, setText] = useState('');
  const [localStorageContents, setLocalStorageContents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contents')) {
      const getLocalStorageContents = localStorage.getItem('contents');
      setLocalStorageContents(JSON.parse(getLocalStorageContents));
    }
  }, []);

  
  
  const onChange = (e) => {
    setText(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    
    const newTodo = {
      value: text,
      id: new Date().getTime(),
    };
    
    const newTodos = [newTodo, ...localStorageContents];
    localStorage.setItem('contents', JSON.stringify(newTodos));
    const getLocalStorageContents = localStorage.getItem('contents');
    setLocalStorageContents(JSON.parse(getLocalStorageContents));
    setText('');
  };

  const image = document.getElementById("aaa")
  const num = localStorageContents.length
  const [images,setImages]=useState(num + 1)
  
  const countDown = () => {
  setImages(images + 1)
  console.log(images)
  if(images === 1)
    {image.classList.add("image0")
  } else if (images === 2){
    image.classList.add("image1")
  } else if (images === 3){
    image.classList.add("image2")
  } else if (images ===4){
    image.classList.add("image3")
  }
}

  return (
    <section>
      <div className="header form-size section box has-background-white is-shadowless is-flex is-justify-content-center is-align-items-center m-auto">
        <form action="submit" onSubmit={handleSubmit} className="field columns is-flex is-vcentered is-centered">
          <input type="text" value={text} onChange={onChange} placeholder="愚痴を、どうぞ。"className="input column ml-6 is-danger"/>
          <button onClick={countDown} id="adding" value="追加" onSubmit={(e) => e.preventDefault()} type="submit" className="postBtn ml-3 mr-5 button is-danger is-outlined is-normal has-text-weight-light">追加</button>
        </form>
      </div>
    <section className="imagefix is-flex is-justify-content-center is-full">
      <section id="aaa" className="section image">
        <div className="posts">
          <div className="columns text is-grouped is-flex is-flex-wrap-wrap is-flex-direction-column is-align-items-center is-centered">
            {localStorageContents.map((todo) => {
              return <p className="todos box column is-5 has-text-centered mb-2 is-full" key={todo.id}>{todo.value}</p>;
            })}
          </div>
        </div>
      </section>
    </section>
  </section>
  );
};

export default PostComplain;
