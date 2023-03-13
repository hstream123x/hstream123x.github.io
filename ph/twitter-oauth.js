const url = new URL(window.location.href);
const searchParams = url.searchParams;

const oauth_token = searchParams.get('oauth_token');
const oauth_verifier = searchParams.get('oauth_verifier');
const oauth_consumer_key= 'xxx'; // storage.options.oauth_consumer_key;

console.log('oauth_token', oauth_token);
console.log('oauth_verifier', oauth_verifier);
console.log('oauth_consumer_key', oauth_consumer_key);
                                                     
const body = {oauth_consumer_key, oauth_token, oauth_verifier }

fetch('https://api.twitter.com/oauth/access_token', {  
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
