const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);
const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);

async function getCoordinates(req, res) {  
  const data = req.params;
  //(!) Validation
  let latitude;
  let longitude;

  const order = await OrderManager.find(data);

  if(!order || order[0]){
    res.status(404).json({ error: "Doesn't exist" });
  } else if (order[0].state == 1) {
    latitude = order[0].from;
    longitude= "";
  } else if (order[0].state == 4) {
    latitude = order[0].to;
    longitude= "";
  }

  const position = await DelivererManager.findByValue({pakage: data.id})
  
  if(position && position[0]){      
    latitude = position[0].latitude;
    longitude = position[0].longitude;    
  }

  position
    ? res.status(200).json({latitude, longitude})
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getCoordinates;
