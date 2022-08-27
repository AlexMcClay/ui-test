import React, {useState, useEffect} from 'react'
import { Container, Box, Typography, Button, Divider } from '@mui/material'
import "./index.css"
import CloseIcon from '@mui/icons-material/Close';

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
                {buy ? <Buy setBuy={setBuy}  item={selected.item} /> : <Items items={testData} setSelected={setSelected} />}
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

const Buy = ({setBuy, item}) => {
    const [mult, setMult] = useState(1);
    const [cost, setCost] = useState(item.cost)

    useEffect(() => {
        setCost((Number(item.cost)) * (Number(mult)));
    }, [mult, item.cost])

    return (
        <Box className='sc-terminal-buy-parent'>
            <Box className="buy-top">
                <Box className='sc-terminal-buy-header'>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography className={"sc-terminal-buy-header-text"} variant="h4">BUYING CONFIRMATION</Typography>
                        <CloseIcon fontSize='large' className={"sc-terminal-buy-header-close"} onClick={() => setBuy(false)} />
                    </Box>
                    <Divider className={"sc-terminal-buy-header-divider"}/>
                </Box>
                <Box sx={{m: "0 1rem"}}>
                    <Typography sx={{fontFamily: "inherit"}} className='text-dark-grey'>LOCATION</Typography>
                    <Typography sx={{fontFamily: "inherit", fontSize: "1.25rem"}} className='text-dark-grey'>PERSONAL INVENTORY</Typography>
                </Box>
                <Box sx={{m: "0 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <Typography className="item-buy-name-text" variant="h6">{item.name}</Typography>
                    <div className='item-buy-line' style={{width: "100%"}}></div>
                    <Typography className="item-buy-name-text white" variant="h6">{item.cost} aUEC</Typography>
                </Box>
                <Box sx={{m: "0 2rem", display: "flex", flexDirection: "column", gap: "1rem"}}>
                    <Typography className="item-buy-name-text" variant="h6">ATTACHMENTS</Typography>
                    <Typography sx={{fontFamily: "inherit"}}>NONE</Typography>
                </Box>
            </Box>
            <Box className={"buy-bottom"}>
                <BuyQuantMult mult={mult} setMult={setMult} />
                <Box className={"buy"}>
                    <Typography variant="h5" className={"bottom-text"} >Total</Typography>
                    <Box sx={{display: "flex", gap: "1rem", alignItems: "center"}}>
                        <Typography variant="h5" className={"bottom-text"} >{cost} aUEC</Typography>
                        <Button className={"buy-sell-button"} variant="contained" size="large">Buy</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const BuyQuantMult = ({mult, setMult}) => {
    return(
        <Box className='quanity-mult'>
            <Typography className={"quanity-mult-text"} >QUALITY MULTIPLIER</Typography>
            <Box className='mult-box'>
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(0)} size="large">0</Button>
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(mult-5)} size="large">-5</Button>
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(mult-1)} size="large">-1</Button>
                <input className='mult-input' type="number" value={mult} onChange={(e) => setMult(Number(e.target.value))} />
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(mult+1)} size="large">+1</Button>
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(mult+5)} size="large">+5</Button>
                <Button className={"mult-button"} variant="contained" onClick={() => setMult(99)} size="large">MAX</Button>
            </Box>
            <Typography className={"quanity-mult-text-transparent"} style={{color: "#edd9a0"}}>QUALITY MULTIPLIER</Typography>
        </Box>
    );
}

const Items = ({items, setSelected}) => {
    return(
        <>
            <div className={"sc-terminal-filters"}>
                <Select span={[1, 2]}/>
                <Select span={[2, 1]}/>
                <Select span={[2, 1]}/>
                <Select span={[2, 2]}/>
            </div>
            <div className='line' />
            <div className='sc-terminal-items'>
                {items.map((item) => {
                    return <Item item={item} key={item.id} setSelected={setSelected} />
                })}
            </div>
        </>
    )
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