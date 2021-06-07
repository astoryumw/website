require("isomorphic-fetch");

function getCuber(name,cube) {
	return fetch(`http://localhost:3001/api/rank?name=${name}&cube={cube}`).then(function(resp) 
	{
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getInfo: function(name,cube) {
		return getCuber(name,cube).catch(handleError);
	}
};