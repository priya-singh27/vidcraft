import Header from "../components/Header.jsx"
import { RiVideoUploadLine } from "react-icons/ri";

export default function Homepage(){
    return (
      <>
        <Header />
        <section className="upload-section">
          <div className="upload-area">
            <div className="upload-icon">
              <RiVideoUploadLine/>
            </div>
          </div>
        </section>
      </>
    );
}