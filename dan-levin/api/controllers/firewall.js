module.exports = async function (req, res) {

  if(req.params.product.match(/firewall/)){
    return res.view('firewall');
  } else {
    return res.view('404');
  }
}