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
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';

import foodsAboutImg from '../fg.jpg';

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
                            <div className={classes.toolbar} />
                            <Divider />
                            <nav className="inline-flex self-center flex-1 items-center flex-col justify-center">
                                <NavLink
                                    to={"/"}
                                    className={"inflex-flex items-center py-6 px-3 text-red-600 hover:text-white text-4xl font-bold tracking-widest ml-5"}
                                >
                                    ShopTop
                                </NavLink>
                                <NavLink
                                    to={"/categories"}
                                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                                    Categories
                                </NavLink>
                                <NavLink
                                    to={"/Product"}
                                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to={"/vendors"}
                                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                                    Vendors
                                </NavLink>
                                <NavLink
                                    to={"/About"}
                                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                                    About Us
                                </NavLink>
                                <NavLink
                                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                                    Contact Us @
                                </NavLink>
                                <h1 className='text-white cursive py-1'>ShopTop@Bangalore.com</h1>
                                <h1 className='text-white cursive py-1'>ShopTop@Mumbai.com</h1>
                                <h1 className='text-white cursive py-1'>8904616217</h1>
                            </nav>
                            <img
                                src={foodsAboutImg}
                                className="w-60 rounded-2xl lg:rounded-l-xl h-30 mt-10 ml-4 self-center"
                                alt="food"
                            />
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
                        <NavLink
                            to={"/"}
                            className={"inflex-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-white text-4xl font-bold tracking-widest"}
                        >
                            ShopTop
                        </NavLink>
                        <NavLink
                            to={"/categories"}
                            className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                            Categories
                        </NavLink>
                        <NavLink
                            to={"/Product"}
                            className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to={"/vendors"}
                            className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                            Vendors
                        </NavLink>
                        <NavLink
                            to={"/About"}
                            className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                            About Us
                        </NavLink>
                        <NavLink
                            // to={"/About"}
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive"}>
                            Contact Us
                        </NavLink>
                    </nav>
                    <div className='inline-flex py-3 px-3 my-6 self-end'>
                        <SocialIcon url='https://twitter.com/SanjeevAshrit1' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.instagram.com/ashrithsanjeev/?igshid=YmMyMTA2M2Y%3D' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.linkedin.com/in/sanjeev-ashrit-6313251b7' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{ height: 35, width: 35 }} />
                    </div>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle className='self-center'>Contact us at</DialogTitle>
                        <List sx={{ pt: 0 }}>
                            <ListItem autoFocus className={'bg-red-100'}>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="ShopTop@Bengaluru.com" className='font-bold' />
                            </ListItem>
                            <ListItem autoFocus className={'bg-green-100'}>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="ShopTop@Mumbai.com" className='font-bold' />
                            </ListItem>
                        </List>
                    </Dialog>
                </div>
            </header>
        );
    }
}

export default NavBar;
