import { useCallback} from "react";
import "./webb-pattern.css";

const WebbPattern = ( ) => {
    const onGroupContainerClick = useCallback (() => {
    // Please sync "Homepage 2" to the project
       const Data = Homepage2;
       return Data;

    }, []);

  return (
    <div className="webb-pattern">
      <h1 className="onboarding-portal-login">Onboarding Portal Login</h1>
      <div className="step-into-a">
        Step into a world of possibilities! Unlock the doors to your onboarding
        journey by logging in. Your adventure awaits, so let's embark together
        and create something extraordinary!
      </div>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-2" />
        <div className="group-1"/>
      </div>
      <div className="enter-your-register">
        Enter your register mobile number
      </div>
      <img
        className="untitled-design-1-2"
        alt=""
        src="/untitled-design-1-2@2x.png"
      />
      {/* < Homepage2/> */}
    </div>
  );
};

export default WebbPattern;
