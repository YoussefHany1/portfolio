import styles from "./header.module.css";
import { DecryptText } from "./DecryptText.jsx";
import Typewriter from "./Typewriter.jsx";
function Header() {
  return (
    <>
      <header className={`h-screen relative overflow-hidden ${styles.header}`}>
        <div
          className={`header-content text-white text-center h-full flex flex-col justify-center p-4 lg:p-0 ${styles.headerContent}`}
        >
          <h1 className="font-bold uppercase lg:text-8xl text-5xl">
            <DecryptText text="Get the Ultimate Web Experience" speed={50} />
          </h1>
          <h2 className="text-lg lg:text-2xl font-semibold">
            With websites that exude {" "}
            <Typewriter
              text={["magic", "fantastic", "creativity", "imagination", "beauty", "power", "spirit", "passion"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
        </div>
      </header>
    </>
  );
}
export default Header;
