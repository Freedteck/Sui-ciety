import Header from "./Header";
import Memes from "./Memes";
import Stories from "./Stories";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <main>
        <Stories />
        <Memes />
      </main>
    </div>
  );
};

export default Main;
