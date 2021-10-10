import Head from 'next/head'
import styles from "./index.module.css"
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Button} from "@material-ui/core";

export async function getStaticProps() {
    const blueprintPrices = [
        {
            "size": "A0",
            "blackWhite": 9 + " ₺",
            "colored": 20 + " ₺",
            "poster": 50 + " ₺"
        },
        {
            "size": "A1",
            "blackWhite": 7 + " ₺",
            "colored": 15 + " ₺",
            "poster": 40 + " ₺"
        },
        {
            "size": "A2",
            "blackWhite": 6 + " ₺",
            "colored": 12 + " ₺",
            "poster": 30 + " ₺"
        },
        {
            "size": "A3",
            "blackWhite": 3 + " ₺",
            "colored": 4 + " ₺"
        },
        {
            "size": "A4",
            "blackWhite": 2 + " ₺",
            "colored": 3 + " ₺"
        }
    ]
    const aydingerPrices = [
        {
            "size": "A0",
            "price": 35 + " ₺"
        },
        {
            "size": "A1",
            "price": 25 + " ₺"
        },
        {
            "size": "A2",
            "price": 20 + " ₺"
        }
    ]
    const kraftPrices = [
        {
            "size": "70x100",
            "price": 20 + " ₺"
        }
    ]
    const bindingPrices = [
        {
            "size": "A3",
            "price": 10 + " ₺"
        },
        {
            "size": "A4",
            "price": 10 + " ₺"
        }
    ]
    return {
        props: {
            blueprintPrices,
            aydingerPrices,
            kraftPrices,
            bindingPrices
        },
    }
}

export default function IndexPage({blueprintPrices, aydingerPrices, kraftPrices, bindingPrices}) {
    const [value, setValue] = React.useState('products_and_prices');
    const [sent, setSent] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const send = () => {
        setSent(true);
    }

    const openWhatsapp = () => {
        window.open("https://chat.whatsapp.com/Cztpt1UihiDBtS2jyEIGb0", '_blank').focus();
    }

    return (

        <main>
            <Head>
                <title>Konsept Ozalit</title>
            </Head>
            <h1 className={styles.bank_font_center}>KONSEPT OZALIT</h1>
            <Box sx={{width: '100%'}} className={styles.tabs_container}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="black"
                    className={styles.tabs}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#d9bc54"
                        }
                    }}
                    aria-label="secondary tabs example"
                >
                    <Tab className={styles.bank_font_center} value="products_and_prices" label="Ürünler"/>
                    <Tab className={styles.bank_font_center} value="contact" label="Iletisim"/>
                </Tabs>
            </Box>
            <div style={(value === "products_and_prices") ? {} : {display: 'none'}}>
                <section className={styles.category}>
                    <h3 className={styles.bank_font_center}>Ozalit</h3>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.bank_font_center} align="center">Boyut</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Siyah
                                        Beyaz</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Renkli</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Poster</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {blueprintPrices.map((price) => (
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.size}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.blackWhite}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.colored}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.poster}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
                <section className={styles.category}>
                    <h3 className={styles.bank_font_center}>Aydinger</h3>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.bank_font_center} align="center">Boyut</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Fiyat</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {aydingerPrices.map((price) => (
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.size}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
                <section className={styles.category}>
                    <h3 className={styles.bank_font_center}>Kraft</h3>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.bank_font_center} align="center">Boyut</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Fiyat</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {kraftPrices.map((price) => (
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.size}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
                <section className={styles.category}>
                    <h3 className={styles.bank_font_center}>Ciltleme</h3>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.bank_font_center} align="center">Boyut</TableCell>
                                    <TableCell className={styles.bank_font_center} align="center">Fiyat</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bindingPrices.map((price) => (
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.size}</TableCell>
                                        <TableCell className={styles.bank_font_center}
                                                   align="center">{price.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            </div>
            <div style={(value === "contact") ? {} : {display: 'none'}}>
                <div style={(sent) ? {display: 'none'} : {}}>
                    <TextField
                        className={styles.message}
                        id="filled-multiline-static"
                        label="Mesajınız"
                        multiline
                        rows={8}
                        placeholder="Soru, öneri, sipariş vb..."
                    />
                    <Button className={styles.message} onClick={send} variant="outlined">Gönder</Button>
                </div>
                <div style={(sent) ? {marginTop: '20px', marginBottom: '50px', color: 'green'} : {display: 'none'}}>
                    <div className={styles.bank_font_center}>Mesajınız gönderildi</div>
                </div>
                <div>
                    <p className={styles.bank_font_center}>
                        WHATSAPP GRUBUMUZ :
                    </p>
                    <div onClick={openWhatsapp} style={{width: '100%', textAlign: 'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="48" height="48"
                             viewBox="0 0 24 24"
                        >
                            <path
                                d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                        </svg>

                    </div>
                    <p className={styles.bank_font_center} style={{marginTop: '20px'}}>
                        KONSEPTOZALİT@GMAİL.COM
                    </p>
                    <p className={styles.bank_font_center}>
                        MAIL :
                    </p>
                    <p className={styles.bank_font_center} style={{marginTop: '20px'}}>
                        KONSEPTOZALİT@GMAİL.COM
                    </p>
                    <p className={styles.bank_font_center}>
                        TELEFON :
                    </p>
                    <p className={styles.bank_font_center}>
                        0545 591 34 13
                    </p>
                    <p className={styles.bank_font_center}>
                        0535 467 53 24
                    </p>
                </div>
            </div>
        </main>
    )
}
