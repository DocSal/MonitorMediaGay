const axios = require('axios').default;
var qs = require('qs');
const discord = require('./sendDiscord.js');
var a,b,c,d,e,f,g = false;


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function monitor() { 

    axios.all([
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-149212`), //3060ti
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-145164`), //asus 3070 biventola 
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-145091`), //asus 3070 TUF triventola
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-149220`), //asus rog strix 3070
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-152538`), //msi 3070
        axios.get(`https://www.mediaworld.it/api/v2/wcs/resources/store/20000/productview/withPartNumbersAndFilter/p-152543`) //msi triventola 3070
        ])
        .then(axios.spread((data1,data2,data3,data4,data5,data6) => {
            console.log("[+] checking...")
            if(!a){
                if(data1.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-149212/asus-dual-geforce-rtx-3060-ti-oc-edition")
                    a=true;
                }
            }

            if(!b){
                if(data2.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-145164/asus-geforce-rtx-3070-8gb")
                    b=true
                }
            }

            if(!c){
                if(data3.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-145091/asus-tuf-geforce-rtx-3070-8gb")
                }
                c=true
            }

            if(!d){
                if(data4.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-149220/asus-rog-strix-geforce-rtx-3070-8gb")
                    d=true
                }
            }

            if(!e){
                if(data5.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-152538/msi-geforce-rtx3070-ventus-2x-oc")
                    e=true
                }
            }

            if(!f){
                if(data6.data['CatalogEntryView'][0]['AvailabilityMap']['quantity']>0){
                    console.log("[+] Available")
                    discord.sendToDiscord("https://www.mediaworld.it/product/p-152543/msi-geforce-rtx3070-ventus-3x-oc")
                    f=true
                }
            }
            setTimeout(monitor, 1500);
        }));
}


monitor()
