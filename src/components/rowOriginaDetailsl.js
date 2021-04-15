import React from "react";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";

const RowOriginalDetails = (props) => {

  // fetching Data from fetchPostDetails file 
  const originalDetails = props.location.data;
  // console.log("original Details-----", originalDetails);


  return (
    <div>
      <List>
        {/* =================== testing only ================== */}
        {/* {originalDetails.created_at}  */}

        {/*===================== list of original Row data JSON format  ==================*/}
        <ListItem>{JSON.stringify(originalDetails)}</ListItem>
      </List>
    </div>
  );
};
export default RowOriginalDetails;
