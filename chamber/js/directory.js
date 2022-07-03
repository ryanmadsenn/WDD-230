document.onload = printJSON();

async function printJSON() {
    fetch("./js/data.json")
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            // console.log(data['businesses'])
            let businesses = data['businesses']

            businesses.forEach( business => {
                
                // Define new html elements
                let container = document.getElementById('directory')
                let sect = document.createElement('section')
                sect.classList.add('business')
    
    
                let businessName = document.createElement('span')
                businessName.classList.add('business-name')
                let address = document.createElement('p')
                let phone = document.createElement('p')
                let website = document.createElement('a')
                let membership = document.createElement('p')
                let image = document.createElement('img')
    
                // Assign text content.
                businessName.textContent = business.name;
                address.textContent = business.address;
                phone.textContent = business.phone;
                website.textContent = "Visit site"
                website.setAttribute('href', business.website)
                membership.textContent = business.membershipStatus
                image.setAttribute('src', business.imageLink)
                image.setAttribute('alt', business.name)

                if (business.membershipStatus == "Gold Member") {
                    membership.classList.add("gold-member")
                } else if (business.membershipStatus == "Silver Member") {
                    membership.classList.add("silver-member")
                } else if (business.membershipStatus == "Bronze Member") {
                    membership.classList.add("bronze-member")
                }

    
                // Append elements.
                // sect.appendChild(businessName);
                sect.appendChild(image);
                sect.appendChild(membership);
                sect.appendChild(address);
                sect.appendChild(phone);
                sect.appendChild(website);
                
                try {
                    container.appendChild(sect)
                } catch (error) {
                }
            });
        });
}