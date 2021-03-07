require("isomorphic-fetch");

function getCuber(name) {
	return fetch(`http://35.194.72.130/api/rank?name=${name}`).then(function(resp) 
	{
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getInfo: function(name) {
		return getCuber(name).catch(handleError);
	}
};