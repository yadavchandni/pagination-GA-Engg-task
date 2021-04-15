// NPM packages
import React, { Fragment } from "react";

//Route Packages
import { Switch, Route } from "react-router-dom";

//local main files
import FetchPostDeatils from "../components/fetchPostDetails";
// import RowOriginalDetails from "../components/rowOriginaDetailsl";

export default function FetchPostDeatilsRoute() {
  return (
    <div>
      <Fragment>
        {/* fetch post Details && row Origina Details*/}
        <Switch>
          <Route exact path="/" component={FetchPostDeatils} />
          {/* <Route path="/row-original-details/" component={RowOriginalDetails} /> */}
        </Switch>

        {/* This will always be at the end */}
        {/* Common footer */}
      </Fragment>
    </div>
  );
}
