import FirstComponent from "./FirstComponent"
import {ThirdComponent} from "./FirstComponent";
import SecondComponent from "./SecondCOmponent"
import LearningJS from "./LearningJS";

function LearningComponent() {
    return (
        <div className="LearningComponent">
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <LearningJS/>
        </div>
    );
}
export default LearningComponent