import React, { useState } from 'react';
import {
    AppBar,
    Avatar,
    Box,
    CssBaseline,
    Dialog,
    DialogTitle,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';

import foodsAboutImg from '../fg.jpg';
import {contacts, navData, navDataMini} from '../utils/commonComponents'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

function NavBar() {
    const [open, setIsOpen] = useState();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    };

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    if(isTabletOrMobile) {
        return(
            <header className='py-7'>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar position="fixed" style={{ backgroundColor: '#6A1B9A' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                ShopTop
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        anchor='left'
                        variant="temporary"
                        open={drawerOpen}
                        onClose={handleDrawerOpen}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <div style={{width: '30vh'}} className={'bg-purple-800 h-full'}>
                            <div className={classes.toolbar}>
                                <img
                                    src={foodsAboutImg}
                                    className="w-full rounded-2xl lg:rounded-l-xl h-25"
                                    alt="food"
                                />
                            </div>
                            <Divider />
                            <nav className="inline-flex self-center flex-1 items-center flex-col justify-center grid grid-cols-1 place-content-center justify-center">
                                {navDataMini.map((item) => {
                                    if(item?.id !== 6) {
                                        return(
                                            <NavLink
                                                to={item?.to}
                                                className={item?.style}>
                                                {item?.name}
                                            </NavLink>
                                        );
                                    } else {
                                        return(
                                            <NavLink
                                                className={item?.style}>
                                                {item?.name}
                                            </NavLink>
                                        )
                                    }
                                })}
                                <div>
                                    {contacts?.map((item) => {
                                        return(
                                            <h1 key={item?.id} className={item?.style}>{item?.name}</h1>
                                        )
                                    })}
                                </div>
                            </nav>
                        </div>
                    </Drawer>
                </Box>
            </header>
        );
    } else {
        return(
            <header className={"bg-purple-800"}>
                <div className="container mx-auto flex justify-between">
                    <nav className="inline-flex self-center flex-1 ml-10">
                        {navData?.map((item, index) => {
                            if(item?.id !== 6 ) {
                                return(
                                    <NavLink
                                        key={item?.id}
                                        to={item?.to}
                                        className={item?.style}>
                                        {item?.name}
                                    </NavLink>
                                );
                            } else {
                                return(
                                    <NavLink
                                        onClick={() => {
                                            setIsOpen(true);
                                        }}
                                        className={item?.style}>
                                        {item?.name}
                                    </NavLink>
                                );
                            }})
                        }
                    </nav>
                    <div className='inline-flex py-3 px-3 my-6 self-end'>
                        <SocialIcon url='https://twitter.com/SanjeevAshrit1' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.instagram.com/ashrithsanjeev/?igshid=YmMyMTA2M2Y%3D' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.linkedin.com/in/sanjeev-ashrit-6313251b7' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                    </div>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle className='self-center'>Contact us at</DialogTitle>
                        <List sx={{ pt: 0 }}>
                            {contacts?.map((item) => {
                                return(
                                    <ListItem autoFocus className={item?.id % 2 === 0 ? 'bg-red-100' : 'bg-green-100'}>
                                        <ListItemAvatar>
                                            <Avatar>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item?.name} className='font-bold' />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Dialog>
                </div>
            </header>
        );
    }
}

export default NavBar;
