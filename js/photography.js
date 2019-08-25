const baseURL = 'https://res.cloudinary.com/martinmags/image/upload/q_auto,f_auto,c_fill/'
const portfolioURL = `photography%20portfolio/`;
let photos = document.querySelectorAll(".photo");

for(let i=0; i<photos.length; i++)
{
  // Generate src attribute string
  let url = photos[i].getAttribute("id").split('/');
  url = `${baseURL}${url[0]}/${portfolioURL}${url[1]}` // Portraits

  // Set image link to src
  photos[i].setAttribute("src", url);
  photos[i].setAttribute("alt", `photo${i}`);
  
}
