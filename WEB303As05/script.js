/*
Name : Anchal Walia
Student Number : 0799722
Assignment : 5
*/

$(document).ready(function () {

    class ContentItem{
        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category){
            if (this.id === id && name && description && category){
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString(){
            const divWrapper = document.createElement('div');
            divWrapper.classList.add('content-item-wrapper');
            divWrapper.id = `content-item-${this.id}`;
            divWrapper.innerHTML = `<h4>${this.name}</h4> <p>${this.description}</p> <div>${this.category}</div>`;  
            
            return divWrapper;
        }

    }

    const contentItem1 = new ContentItem(1, 'Honda Activa 6G', 'Honda launched the Premium Edition of the Activa 6G and it costs a minimal premium over the DLX variant. Check out all the details in our launch story. We reviewed the Honda Activa 6G and here what we liked and what we did not about the scooter. If you want to check the scooter out through images, head to our story here.  Head here to find out Honda Activa sales numbers in the month of August 2022.', 'Sports');
    const contentItem2 = new ContentItem(2, 'TVS Jupiter', 'The new Jupiter ZX SmartXonnect features a fully digital instrument cluster which is derived from the TVS NTorq 125. It also comes with navigation and voice assist, along with call/SMS access. The Jupiter ZX Disc gets the TVS intelliGo technology, which turns off the engine when idling for a long time. A gentle twist of the throttle turns the engine back on. This feature helps increase the scooters mileage and reduce emissions on traffic-riddled roads. It also gets a silent starter. For some extra convenience there an all-in-one ignition key slot. The Jupiter also gets an LED headlight, an ample 21-litre underseat storage, a sizable 2-litre cubbyhole on the back of the apron, and mobile phone charging port.', 'Regular');
    const contentItem3 = new ContentItem(3, 'TVS NTORQ', 'The TVS NTorq 125 is a feature-packed scooter. It was the first TVS two-wheeler to get an all-digital console equipped with smartphone connectivity, which TVS calls SmartXonnect. You can also pair your phone and get ride data analytics, call and SMS alerts, turn-by-turn navigation, and vehicle diagnostics alerts. The TVS NTorq 125 Race XP edition comes with a refreshed user interface and voice-assist function along with the ability to save addresses that you have frequently visited. The XT variant however features a TFT and LCD combined instrument console, active voice command, TV IntelliGO technology (start-stop tech), a pair of stylish new light-weight alloy wheels and a new neon-green colour. On the other hand, you get snazzier graphics, a hazard light switch, and an LED headlight on the TVS NTorq 125 Race Edition. The TVS NTorq 125 SuperSquad Edition is actually based on the Race Edition. However, it gets a custom user interface for the SmartXonnect application, apart from the exclusive Marvel-themed livery.', 'Sports');
    const contentItem4 = new ContentItem(4, 'Suzuki Access 125', 'Suzuki had given the Access 125 a couple of new features with the BS6 update. Firstly, the LED headlight gets a chrome bezel. The semi-digital information panel gets an eco-assist indicator, which is basically a bar that turns from blue to green when you ride the scooter economically. You finally get an external fuel filler cap on the Access 125, which should make filling fuel a convenient affair. Suzuki also introduced new variants with the Suzuki Ride Connect feature. This Bluetooth-enabled smartphone-compatible instrument cluster allows you to access features such as turn-by-turn navigation, call/SMS/ WhatsApp alerts, overspeeding alerts, trip sharing and last parked location. All these features enhance the Access 125 practicality considerably.', 'Comfortable');
    const contentItem5 = new ContentItem(5, 'Ola S1', 'The S1 comes equipped with an all-LED illumination, a massive 36-litre underseat storage (34 litres on the Air variant), a seven-inch TFT instrument cluster with smartphone connectivity, Bluetooth, GPS and Wifi connectivity. Other features include side-stand-down and anti-theft alert, geofencing, cruise control, reverse mode, Get Home Mode, Take Me Home Lights and a Limp Home Mode. The e-scooter also gets a reverse mode, a seven-inch touchscreen display with smartphone connectivity, multiple ride profiles, music and call control, multiple riding moods (that changes the layout of the console as well as the motor sound) and party mode, where the scooter speaker plays music from the connected smartphone. The MoveOS 3.0 will bring features like the faux motor sounds, hill hold, vacation mode which conserves the battery over an extended period of non-usage, proximity unlock, ride moods (Bolt, Vintage and Eclipse), regenerative braking V2 (with three modes), Hypercharging, Bluetooth calling and key sharing to the e-scooter. ', 'Electric');


    const contentItems = [contentItem1, contentItem2, contentItem3, contentItem4, contentItem5];
    contentItems.forEach(contentItem => {
        $('div#content-item-list').append(contentItem.toString());
    });

    $('.content-item-wrapper').css({
        'border' : ' 1.5px solid pink',
        'width' : '95%',
        'padding' : '1em',
        'margin' : '.8em auto'
    });
});


