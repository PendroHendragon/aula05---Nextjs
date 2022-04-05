import Title from "../src/components/title";
import style from "../src/style/style.module.css";

function HomePage() {
  const name = "Pedro";
  return (

    <div><h1 className={style.h1} >Bem vindo, {name}</h1>
      <Title texto="Meusite" className={style.h1} />
    </div>
  );
}

export default HomePage