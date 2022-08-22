import React, {useState, useEffect} from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import "./index.css"

const testData = [
    {
        id: "P4-AR",
        name: "P4-AR",
        category: "Weapon",
        description: "Behring's classic P4-AR rifle features a collapsible stock and shortened barrel, making it an ideal choice for close-quarter firefights. Its accuracy and general ease of use make it universally valued among security, military and civilian users.",
        cost: 3525,
        volume: 1500,
        img: "https://starcitizen.tools/images/3/34/P4-AR_-_Default_-_InGame_Cutout_-_Mesh_BG.jpg",
        weapon: {
            magazine: ["P4-AR_Mag"],
            attatchments: {
                optics: 2,
                barrel: 2,
                underbarrel: 2,
            },
        },
    },
    {
        id: "P4-AR_Mag",
        name: "P4-AR Magazine",
        category: "Magazine",
        description: "This magazine for the Behring P4-AR rifle holds thirty 5.56mm cartridges.",
        magazine: {
            for: "P4-AR",
            capacity: 30,
        },
        cost: 13,
        volume: 610,
        img: "https://starcitizen.tools/images/thumb/c/c2/P4_AR_magazine.png/450px-P4_AR_magazine.png"
    }
]

function SCTradeTerminal() {
    const [selected, setSelected] = useState({
        state: false,
        item: null,
    });
    const [buy, setBuy] = useState(false);
    const [purchased, setPurchased] = useState(false);

  return (
    <Container className={"sc-terminal-parent"}>
        <Box className={"sc-terminal-sub-header"}>
            <div className='sc-sub-header-bar end-left' style={{width: "40px"}}></div>
            <Typography variant="h5" component="h5" className={"sc-sub-header-text"}>LIVE FIRE WEAPONS</Typography>
            <div className='sc-sub-header-bar' style={{width: "100%"}}></div>
            <Typography variant="h5" component="h5" className={"sc-sub-header-text"}>USER</Typography>
            <div className='sc-sub-header-bar end-right' style={{width: "40px"}}></div>
        </Box>
        
        <Box className={"sc-terminal-child"}>
            <Box className={"sc-terminal-child-left"}>
                <div className={"sc-terminal-filters"}>
                    <Select span={[1, 2]}/>
                    <Select span={[2, 1]}/>
                    <Select span={[2, 1]}/>
                    <Select span={[2, 2]}/>
                </div>
                <div className='line' />
                <div className='sc-terminal-items'>
                    {testData.map((item) => {
                        return <Item item={item} key={item.id} setSelected={setSelected} />
                    })}
                </div>
            </Box>
            <Box className={"sc-terminal-child-right"}>
                {selected.state ? <SelectedItem item={selected.item} setBuy={setBuy} buy={buy} /> :
                <div className='right-empty'>
                    <p style={{margin: 0, padding: 0}}>NO ITEM SELECTED</p>
                    <p style={{margin: 0, padding: 0}}>SELECT ITEM TO VIEW DETAILS</p>
                </div>
                }
            </Box>
        </Box>
        
    </Container>
  )
}

const Select = ({span}) => {
    return(
        <div className='sc-terminal-select-parent' style={{gridColumn: `span ${span[1]}`, gridRow: span[0]}}>
            <label htmlFor={"test"} className='sc-terminal-select-label'>TEXT</label>
            <select className='sc-terminal-select' name={"test"} id={"test"}>
                <option value={"test"}>Test</option>
                <option value={"test"}>Test</option>
                <option value={"test"}>Test</option>
                <option value={"test"}>Test</option>
                <option value={"test"}>Test</option>
            </select>
        </div>
    );
}

const Item = ({item, setSelected}) => {
    return (
    <div className={"sc-terminal-item-parent"}>
        <div onClick={() => setSelected({item: item, state: true})} className={"sc-terminal-item-container"}>
            <div className={"sc-terminal-item-icon-parent"}>
                <img className={"sc-terminal-item-icon"} src={item.img} alt={item.name} />
            </div>
            <div className='sc-terminal-item-descrioption'>
                <div>
                    <p className={"item-name"} style={{padding: 0, margin: 0}}>{item.name}</p>
                    <p className={"item-vol"} style={{padding: 0, margin: 0}}>Volume: {item.volume}</p>
                </div>
                <div>
                    <p className={"item-cost"} style={{padding: 0, margin: 0}}>{item.cost} aUEC</p>
                </div>
            </div>
        </div>
        <div  className={"sc-terminal-item-quickbuy"}>
            <Button variant="contained" size={"small"} className={"sc-terminal-item-quickbuy-button"}>Quick Buy</Button>
        </div>
    </div>);
}

const SelectedItem = ({item, setBuy, buy}) => {
    return (
    <div className='show-item-right'>
        <div className='show-item-right-main'>
            <p style={{padding: 0, margin: 0}}>{item.name}</p>
            <p className={"text-grey"} style={{padding: 0, margin: 0}}>Item Type: {item.category}</p>
            { typeof item.magazine === 'object' ? <p className={"text-grey"} style={{padding: 0, margin: 0}}>Capacity: {item.magazine.capacity}</p> : ""}
            <p className={"text-grey"}>{item.description}</p>
            <img className='right-image' src={item.img} alt={item.id} />
        </div>
        <div className={"right-buy-button"}>
            {!buy ? <Button className={"buy-sell-button"} variant="contained" size="large" onClick={() => setBuy(true)}>Buy</Button> : ""}
        </div>
    </div>);
}

export default SCTradeTerminal