const products = [
	{
		name: "Ascend Orion 3 Three-Person Backpacking Tent",
		image: "/images/tent1.png",
		description:
			"Easy to carry and easy to setup, the Ascend® Orion 3 Three-Person Backpacking Tent gives light packing hikers 3-season protection for the trail. The Orion's design goes up fast, combining lightweight and equal-length 7001 aluminum poles, color-coded webbing, and quick-attach pole clips.",
		brand: "Ascend",
		category: "Tents",
		price: 49.99,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10
	},
	{
		name: "Coleman BatteryGuard 250M Flashlight",
		image: "/images/flashlight1.png",
		description:
			"The Coleman® BatteryGuard™ 250M Flashlight features BatteryGuard technology that automatically disengages batteries so they don't corrode, allowing them to last up to 25% longer than lights without this technology. BatteryGuard automatically engages when you turn the flashlight off, so you don't have to remember any special steps – just turn it off and enjoy extra peace of mind! The rugged, lightweight aluminum construction boasts a rubber-edged bezel to add protection against drops. Ergonomic design provides an easy grip.",
		brand: "Lumen",
		category: "Lighting",
		price: 15.99,
		countInStock: 0,
		rating: 4.0,
		numReviews: 8
	},
	{
		name: "Lumore 500-Lumen Work Light",
		image: "/images/flashlight2.png",
		description:
			"Just because the sun's gone down, doesn't mean the job is done. Rely on the Lumore® 500-Lumen Work Light to keep you going, long after the sun has set. Featuring 3 modes of operation (high, low, and strobe) and a 180°-adjustable arm, this work light easily adapts to provide the right amount of light for any situation.",
		brand: "Lumen",
		category: "Lighting",
		price: 929.99,
		countInStock: 5,
		rating: 3,
		numReviews: 12
	},
	{
		name: "Big Foot Extended Carry Waterfowl Work Station Blind Bag",
		image: "/images/bag1.png",
		description:
			"Add the functionality of your everyday carry bag into a big-capacity blind bag with the Big Foot Waterfowl Extended Carry Work Station Blind Bag. This high performance design combines the laptop storage function of an everyday carry bag into the gear storage and organization of a big blind bag.",
		brand: "BigFoot",
		category: "Bags",
		price: 59.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12
	},
	{
		name: "Bass Pro Shops Eclipse Hiker/Biker 1-Person Backpacking Tent",
		image: "/images/tent2.png",
		description:
			"With its easy access door and great ventilation, the 1-person Hiker/Biker backpacking tent from Bass Pro Shops® Eclipse™ combines comfortable protection with convenient size out on the trail. This basic A-frame tent utilizes walls, rainfly, and floor all made of a lightweight 190T polyester taffeta with 1,200mm PU coating for a lightweight and effective shield from the elements.",
		brand: "Eclipse",
		category: "Tents",
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},
	{
		name: "Beretta Tactical Backpack",
		image: "/images/bag2.png",
		description:
			"Head to the range fully loaded, but with your hands free for other tasks. The Beretta® Tactical Backpack holds your shooting essentials in one well-organized carry-all. Stylish and weather-resistant, I's made of sturdy 600-denier polyester fabric with a Durable Water Resistant polyurethane coating.",
		brand: "Beretta",
		category: "Bags",
		price: 29.99,
		countInStock: 2,
		rating: 4,
		numReviews: 12
	},
	{
		name: "Coleman ComfortSmart Quickbed Air Bed",
		image: "/images/sleeping1.png",
		description:
			"Whether camping or surprised by company, Coleman®'s ComfortSmart™ Quickbed® Air Beds provide the comfortable bed you want and need quickly! With durable, heavy-duty PVC construction and Coleman's Airtight® system, you can trust these inflatable beds to provide a comfortable place to sleep every time you turn to it. Double Lock Valve™ keeps in air. Soft suede top for luxurious comfort.",
		brand: "Coleman",
		category: "Sleeping",
		price: 95.99,
		countInStock: 0,
		rating: 4,
		numReviews: 5
	},
	{
		name: "New!Bass Pro Shops Flag Camp Chair",
		image: "/images/chair1.png",
		description:
			"A comfortable camp chair with a great look for the campsite, picnic, or Fourth of July gathering, the Bass Pro Shops® Flag Camp Chair offers a comfortable seat at a great price.",
		brand: "Beretta",
		category: "Bags",
		price: 55.99,
		countInStock: 15,
		rating: 4,
		numReviews: 5
	},
	{
		name: "Cabela's Standard Sleeping Pad",
		image: "/images/sleeping2.png",
		description:
			"Boasting an R-value of 5, our Cabela's® Standard Sleeping Pad is self-inflating and ultra-comfortable so you can get a good night's sleep, even if you're sleeping on the cold, hard ground. Self-inflating wave foam delivers 2 of comfortable cushioning. The 70-denier polyester top and 150-denier polyester oxford bottom stand up well to hard use.",
		brand: "Cabela",
		category: "Sleeping",
		price: 95.99,
		countInStock: 0,
		rating: 2,
		numReviews: 16
	},
	{
		name: "Jetboil Stash Cooking System",
		image: "/images/stoves2.png",
		description:
			"If you're the type of adventurer that counts every ounce before it goes in your pack, you'll love the Jetboil® Stash™ Cooking System. The Stash is Jetboil's lightest system yet, checking in at just 7.1 oz., yet it doesn't sacrifice any performance. The stand-alone stove boasts a titanium burner and .8L FluxRing® cook pot that brings water to a boil in as little as 2.5 minutes.",
		brand: "Jetboil",
		category: "Stoves",
		price: 65.99,
		countInStock: 0,
		rating: 4.5,
		numReviews: 80
	},
	{
		name: "Cabela's Mountain Trapper 0° Sleeping Bag",
		image: "/images/sleeping3.png",
		description:
			"Stay comfortable out in the backcountry at the coldest basecamps with the Cabela's® Mountain Trapper 0° Sleeping Bag. Combining proven, rugged construction with classic materials, our cold-weather sleeping bag also integrates modern tech and design to optimize comfort and protection.",
		brand: "Cabela",
		category: "Sleeping",
		price: 95.99,
		countInStock: 10,
		rating: 4,
		numReviews: 5
	},
	{
		name: "Coleman Single Burner Backpacking Stove",
		image: "/images/stoves1.png",
		description:
			"The Coleman® Single Burner Backpacking Stove gives you the power to prepare mouthwatering meals no matter where your adventures take you. This high-powered 10,000 BTU single-burner camp stove boasts PerfectHeat technology for fuel-saving, efficient cooking, and PowerFlow™ technology for consistent cooking, even in extreme conditions.",
		brand: "Coleman",
		category: "Stoves",
		price: 43.99,
		countInStock: 0,
		rating: 3,
		numReviews: 5
	},
	{
		name: "New!Bass Pro Shops Flag Camp Chair",
		image: "/images/chair2.png",
		description:
			"A comfortable camp chair with a great look for the campsite, picnic, or Fourth of July gathering, the Bass Pro Shops® Flag Camp Chair offers a comfortable seat at a great price.",
		brand: "Beretta",
		category: "Bags",
		price: 55.99,
		countInStock: 30,
		rating: 4,
		numReviews: 5
	}
];

export default products;
