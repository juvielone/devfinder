import React, { Fragment } from 'react';
import spinnner from "./spinner.gif"

const Spinner = () => {
    return <Fragment>

        <img className="spinner-gif" src={spinnner} alt="loading" />

    </Fragment>

}

export default Spinner;
