import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: '#000',
  },
}));

function ListLoading(Component) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return function ListLoadingComponent( { isLoading, ...props}) {
    if (!isLoading){
    setOpen(true) 
    return <Component {...props} />}

    return (
      <div>
        <Backdrop className={classes.backdrop} open={open} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}
export default ListLoading

// style={{flexGrow: 1}}