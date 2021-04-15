//NPM package
import React, { useState, useEffect } from "react";

//Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

//material ui
import { Button } from "@material-ui/core";

//Router Modules
import { Link } from "react-router-dom";

//local file
import { PostsDetailsAction } from "../redux/action/ActionForPosts";

//css style
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));
const FetchPostDetails = (props) => {
  //state defined
  const [posts, setposts] = useState(0);
  const [loading] = useState("Loading.....");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  // get Time Interval
  useEffect(() => {
    (async function () {
      try {
        setTimeout(() => {
          dispatch(PostsDetailsAction(posts));
          // set Interval https://www.tutorialspoint.com/using-useeffect-in-react-js-functional-component
          setposts(posts + 1);
        }, 2000);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [posts, dispatch]); //input values

  //Get Current Post-------

  const fetchdetails = useSelector((state) => {
    return state.posts; //return state from reducer
  });
  console.log("fetch details post--", fetchdetails);

  // const handleUrl=()=>{
  //   window.location.assign(`${fetchdetails.url}`, "_blank");
  // }
  return (
    <div>
      {/*-------------- only Testing purpose------------- */}
      {/* {fetchdetails.map(postTitle=>(
        <div key={postTitle.posts}>{postTitle.title}</div>
      ))} */}

      <ReactTable
        data={fetchdetails}
        // Global Column Defaults
        columns={[
          {
            columns: [
              {
                Header: () => <h5 className="row-design">TITLE</h5>, // get the title
                accessor: "title", // String-based value accessors!
                // filterable : true,  // using for filter via search box
                sortable: true,
                //-------------------- - using css ----------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
              {
                Header: () => <h5 className="row-design">URL</h5>,
                accessor: "url", // Used to render a standard cell, defaults to the accessed value
                sortable: true,
                // ------------------------ using css --------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
                Cell: (props) => {
                  return (
                    <Button
                      variant="outlined"
                      type="submit"
                      // onClick={() => window.open(`{postTitle.url}`, "_blank")}
                       onClick={() => window.location.assign(`${URL}`)} // Assigns a new URL to the current window.
                       //onClick={handleUrl}
                    >
                      URL
                    </Button>
                  );
                },
              },
              {
                Header: () => <h5 className="row-design">AUTHOR</h5>,
                accessor: "author",
                sortable: true,
                // ------------------------ using css --------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
              {
                Header: () => <h5 className="row-design">CREATED_AT</h5>,
                accessor: "created_at", // String-based value accessors!
                sortable: true,
                // ------------------------ using css --------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
            ],
          },
          //------------------ ROW INFO ----------------------------
          {
            columns: [
              {
                Header: () => <h5 className="row-design">ACTION</h5>,
                Cell: (props) => {
                  return (
                    <Link
                      to={{
                        pathname: "/",
                        data: props.original, //pass the data to rowOriginalDetails
                      }}
                    >
                      {/* <Button
                        variant="outlined"
                        type="submit"
                        // onClick={() => console.log('props',props)}// checking the original data

                      > */}
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Row Origin Data
                      </Button>
                      // <Dialog
                      //   fullWidth={fullWidth}
                      //   open={open}
                      //   onClose={handleClose}
                      //   aria-labelledby="max-width-dialog-title"
                      // >
                      //   {/* ================== JSON FORMAT AND MODAL ===================== */}
                      //   <DialogContent>
                      //     {JSON.stringify(props.original)}
                      //   </DialogContent>
                      //   <DialogActions>
                      //     <Button onClick={handleClose} color="primary">
                      //       Close
                      //     </Button>
                      //   </DialogActions>
                      // </Dialog>
                      </Button> 
                    </Link>
                  );
                },
              },
            ],
          },
        ]}
        defaultPageSize={10} //set the page number
        className="-striped -highlight"
        // showPaginationTop
        // showPaginationBottom
        noDataText={loading} //display the loading... on the screen
        sortable={true} // sortable =====
        filterable={true} // searching column
      />
    </div>
  );
};

export default FetchPostDetails;
