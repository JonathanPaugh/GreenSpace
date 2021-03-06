function writeCommunityGardens() {
    //this is an array of JSON objects copied from open source data
    var gardens = [{
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4401fbe1a8c8f7b8a7a633ea0293f910b6e49851",
        "fields": {
            "street_direction": "E",
            "name": "15th Avenue Coop",
            "street_number": "1255",
            "street_name": "15th",
            "jurisdiction": "Private",
            "mapid": "FA002",
            "year_created": "2014",
            "number_of_plots": 8,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0788387, 49.2571193]
            },
            "geo_local_area": "Mount Pleasant",
            "merged_address": "1255 E 15th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d3c3cff70587ab3499f3f95e4547045c604c259f",
        "fields": {
            "street_direction": "W",
            "name": "16 Oaks",
            "street_number": "1018",
            "street_name": "16th",
            "jurisdiction": "Private",
            "mapid": "FA003",
            "year_created": "2008",
            "number_of_plots": 55,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1276645, 49.2567482]
            },
            "geo_local_area": "Shaughnessy",
            "public_e_mail": "oak.16th.garden@gmail.com",
            "merged_address": "1018 W 16th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "9f271ffca7325368f06a345bc99f98bef2d08e52",
        "fields": {
            "website": "http://adanacparkcommunitygarden.blogspot.ca/",
            "jurisdiction": "Park Board",
            "name": "Adanac Park Community Garden",
            "street_number": "1025",
            "street_name": "Boundary",
            "steward_or_managing_organization": "Kiwassa Neighbourhood Services Association",
            "mapid": "FA006",
            "year_created": "2011",
            "number_of_plots": 30,
            "food_tree_varieties": "1\u00a0Early McIntosh Apple; 1 Jonagold apple; 2 italian plum; 2 dwarf anjou pear; 1 hardy evans cherry; 1 hardy juliet cherry",
            "street_type": "Road",
            "geom": {
                "type": "Point",
                "coordinates": [-123.02439453, 49.27558227]
            },
            "number_of_food_trees": "8",
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "adanac.park.garden@gmail.com",
            "merged_address": "1025 Boundary Road, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "3cb3016d0b4e1e15e25a44f28dc42088018388b9",
        "fields": {
            "jurisdiction": "City",
            "name": "East Boulevard Allotment Plots",
            "street_number": "7176",
            "public_e_mail": "communitygardens@vancouver.ca",
            "steward_or_managing_organization": "City of Vancouver",
            "mapid": "FA007",
            "year_created": "1942",
            "number_of_plots": 71,
            "street_type": "Boulevard",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1505481, 49.2209834]
            },
            "street_direction": "E",
            "geo_local_area": "Kerrisdale",
            "merged_address": "7176 E  Boulevard, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "201c9ba2105a49631953604eb797c8f0bf4d941e",
        "fields": {
            "website": "http://www.atira.bc.ca/community-garden-kitchens",
            "jurisdiction": "Private",
            "name": "Atira Community Garden",
            "street_number": "400",
            "street_name": "Hawks",
            "steward_or_managing_organization": "Atira Community Resources",
            "mapid": "FA009",
            "year_created": "2010",
            "number_of_plots": 15,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0871212, 49.2810913]
            },
            "geo_local_area": "Strathcona",
            "merged_address": "400 Hawks Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ac25059263a419be7aac00f4d6f088791b721bdd",
        "fields": {
            "jurisdiction": "Private",
            "name": "BC Seniors Living Assoc. Garden",
            "street_number": "3355",
            "street_name": "5 th",
            "steward_or_managing_organization": "BC Seniors Living Assoc. Beulah Homes Society",
            "mapid": "FA011",
            "year_created": "2015",
            "number_of_plots": 11,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.032578, 49.266474]
            },
            "street_direction": "E",
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "3355 E  5 th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6b96940305635f6060b96191ffba6a1345974fec",
        "fields": {
            "street_direction": "W",
            "name": "Carnarvon Park",
            "street_number": "2995",
            "street_name": "19th",
            "jurisdiction": "Park Board",
            "mapid": "FA017",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.171486, 49.2565789]
            },
            "number_of_food_trees": "15",
            "geo_local_area": "Arbutus-Ridge",
            "merged_address": "2995 W 19th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f6c8e43eb017cd7415a45794dcc24586ca56d610",
        "fields": {
            "name": "Charles Park",
            "street_number": "3400",
            "street_name": "Charles",
            "jurisdiction": "Park Board",
            "mapid": "FA024",
            "number_of_plots": 0,
            "food_tree_varieties": "Crabapple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0308947, 49.2732079]
            },
            "number_of_food_trees": "1",
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "3400 Charles St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "be26d3fe5287ab1ff00a2871fa466c1b94d68815",
        "fields": {
            "website": "http://rcfsi.blogspot.ca",
            "jurisdiction": "City",
            "name": "Cheyenne Community Garden",
            "street_number": "2755",
            "street_name": "Cheyenne",
            "steward_or_managing_organization": "Collingwood Neighbourhood House Society",
            "mapid": "FA027",
            "year_created": "2010",
            "number_of_plots": 35,
            "food_tree_varieties": "Plums, heritage apples",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0480587, 49.2414955]
            },
            "notes": "inc by 3 plots in 2016",
            "number_of_food_trees": "5",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "foodsecurity@cnh.bc.ca",
            "merged_address": "2755 Cheyenne Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ab98b5143124ca2aabe280600970b0d36f46101d",
        "fields": {
            "name": "Cambridge Community Garden",
            "street_number": "2050",
            "street_name": "Wall",
            "jurisdiction": "City",
            "mapid": "FA028",
            "year_created": "2009",
            "number_of_plots": 5,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.062203, 49.2854905]
            },
            "geo_local_area": "Grandview-Woodland",
            "merged_address": "2050 Wall St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ee4472fb5321b3323b79c182d881ba582b120044",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "China Creek Community Garden",
            "street_number": "1255",
            "street_name": "10th",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA029",
            "year_created": "2008",
            "number_of_plots": 23,
            "food_tree_varieties": "2 apple, 1 plum, and raspberry bushes",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.07886814, 49.26199318]
            },
            "street_direction": "E",
            "number_of_food_trees": "3",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "dig@vcn.bc.ca\n604-734-4673.",
            "merged_address": "1255 E 10th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "0950103a030cca1f184d753c2c255c1352bae8b4",
        "fields": {
            "jurisdiction": "City",
            "name": "City Hall expansion",
            "street_number": "453",
            "street_name": "12th",
            "steward_or_managing_organization": "Vancouver City Hall Community Garden Association",
            "mapid": "FA034",
            "year_created": "2013",
            "number_of_plots": 10,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1139357, 49.2613159]
            },
            "street_direction": "W",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "vancouvercityhallgarden@gmail.com",
            "merged_address": "453 W 12th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "06a1b9e5c603ddd2a737371d5cda6dbf57459d20",
        "fields": {
            "jurisdiction": "City",
            "name": "City Hall Lawn Garden",
            "street_number": "453",
            "street_name": "12th",
            "steward_or_managing_organization": "Vancouver City Hall Community Garden Association",
            "mapid": "FA035",
            "year_created": "2009",
            "number_of_plots": 38,
            "food_tree_varieties": "Apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1139357, 49.2613159]
            },
            "street_direction": "W",
            "number_of_food_trees": "5",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "vancouvercityhallgarden@gmail.com",
            "merged_address": "453 W 12th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d3e276389c2d1d49bc52022078f9654651c2c5ba",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Clark Park Fruit Tree Project",
            "street_number": "1500",
            "street_name": "15th",
            "steward_or_managing_organization": "Grandview Community Centre Association",
            "mapid": "FA038",
            "year_created": "2014",
            "number_of_plots": 0,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.073727, 49.257484]
            },
            "street_direction": "E",
            "number_of_food_trees": "4",
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "1500 E 15th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c1668ff3ea08b39f5c79f23f88632cad0246f99a",
        "fields": {
            "website": "http://www.cottonwoodgarden.com/",
            "jurisdiction": "Park Board",
            "name": "Cottonwood Community Garden",
            "street_number": "857",
            "street_name": "Malkin",
            "steward_or_managing_organization": "Strathcona Community Gardeners Society",
            "mapid": "FA041",
            "year_created": "1992",
            "number_of_plots": 139,
            "food_tree_varieties": "Apple, cherry, plum, fig, Asian pear, hazelnut, Saskatoon, Satsuma Plum, Pacific Crabapple, Heritage Apples",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.08375432, 49.27379855]
            },
            "notes": "Expansion in 2010 - 50 beds with improved accessibility",
            "number_of_food_trees": "26",
            "geo_local_area": "Strathcona",
            "public_e_mail": "cottonwoodgarden@gmail.com",
            "merged_address": "857 Malkin Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4ad601b12d9ed87b8ef2d01a4e780133fec0bb22",
        "fields": {
            "website": "https://www.facebook.com/crowspoint/",
            "jurisdiction": "City",
            "name": "CROWS Point Community Garden",
            "street_number": "2299",
            "street_name": "24th",
            "steward_or_managing_organization": "CROWS Point Community Garden Society",
            "mapid": "FA043",
            "year_created": "2009",
            "number_of_plots": 37,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0579937, 49.2488724]
            },
            "street_direction": "E",
            "number_of_food_trees": "3",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "crows.point@gmail.com",
            "merged_address": "2299 E 24th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "abdd973fbfcd2161ac97e3b2675b5500b03c42f8",
        "fields": {
            "street_direction": "W",
            "name": "Delamont Park",
            "street_number": "2091",
            "street_name": "7th",
            "jurisdiction": "Park Board",
            "mapid": "FA046",
            "number_of_plots": 0,
            "food_tree_varieties": "Cherry, Asian pear, plum, hazelnut",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.152619, 49.2658197]
            },
            "number_of_food_trees": "8",
            "geo_local_area": "Kitsilano",
            "merged_address": "2091 W 7th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7167a553cd066db6da42ad9aad26ce0783d7a1e2",
        "fields": {
            "street_direction": "W",
            "name": "Douglas Park",
            "street_number": "801",
            "street_name": "22nd",
            "jurisdiction": "Park Board",
            "mapid": "FA047",
            "year_created": "2006",
            "number_of_plots": 0,
            "food_tree_varieties": "Pear, apple, plum, cherry",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1222139, 49.2516505]
            },
            "number_of_food_trees": "13",
            "geo_local_area": "South Cambie",
            "merged_address": "801 W 22nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "03e6b929d2e591aa2312f30bd2f42c3e7129879c",
        "fields": {
            "jurisdiction": "City",
            "name": "Dundee Community Garden",
            "street_number": "5395",
            "street_name": "Dundee",
            "steward_or_managing_organization": "Dundee Court Housing Co-op",
            "mapid": "FA051",
            "year_created": "2013",
            "number_of_plots": 23,
            "food_tree_varieties": "Apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0479743, 49.2357653]
            },
            "number_of_food_trees": "4",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "dundeegardens@hotmail.com",
            "merged_address": "5395 Dundee St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "24f9a38a4495a2c4c25e5f06f1ccea1316429630",
        "fields": {
            "website": "http://dig.vcn.bc.ca/Elizabeth_Rogers",
            "jurisdiction": "Park Board",
            "name": "Elisabeth Rogers Community Garden",
            "street_number": "110",
            "street_name": "7th",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA052",
            "year_created": "1996",
            "number_of_plots": 56,
            "food_tree_varieties": "Fuji (red sport), Jonagold, Nova Mac, Italian plum, Damson plum, Dwarf Comice pear, Dwarf Red Sensation pear, dwarf Sierra Pear",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.10722312, 49.26450808]
            },
            "street_direction": "W",
            "number_of_food_trees": "12",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "waitlist.ercg@gmail.com\ninfo.ercg@gmail.com\u00a0 \ndig@vcn.bc.ca\n604-879-3676",
            "merged_address": "110 W 7th\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b0f9bcdb0fddf9f417b9160ece7221cf17f7d2c4",
        "fields": {
            "name": "Emma G Coop",
            "street_number": "2250",
            "street_name": "Fraser",
            "jurisdiction": "Private",
            "mapid": "FA053",
            "year_created": "2013",
            "number_of_plots": 8,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.088762, 49.264569]
            },
            "geo_local_area": "Mount Pleasant",
            "merged_address": "2250 Fraser St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6f13000592b5972925715d5f0c91bb68481e3f39",
        "fields": {
            "name": "Everett Crowley Park",
            "street_number": "8200",
            "street_name": "Kerr",
            "jurisdiction": "Park Board",
            "mapid": "FA055",
            "number_of_plots": 0,
            "food_tree_varieties": "Cherry, pear",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0380764, 49.2111116]
            },
            "number_of_food_trees": "2",
            "geo_local_area": "Killarney",
            "merged_address": "8200 Kerr St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8c3fe9e491382943386fb8655bc8344185e8ecef",
        "fields": {
            "name": "Fraser River Park",
            "street_number": "8705",
            "street_name": "Angus",
            "jurisdiction": "Park Board",
            "mapid": "FA057",
            "year_created": "1986",
            "number_of_plots": 0,
            "food_tree_varieties": "Native Crabapple",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1518406, 49.2082762]
            },
            "number_of_food_trees": "36",
            "geo_local_area": "Kerrisdale",
            "merged_address": "8705 Angus Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e9b52c9c54c12984951c4f1b40242783a284f411",
        "fields": {
            "name": "Fraserview Golf Course",
            "street_number": "7800",
            "street_name": "Vivian",
            "jurisdiction": "Park Board",
            "mapid": "FA059",
            "year_created": "2010",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, cherry",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0539872, 49.2134354]
            },
            "number_of_food_trees": "30",
            "geo_local_area": "Victoria-Fraserview",
            "merged_address": "7800 Vivian Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "608b7c2c5f8f807c9e0777bc82f3815f4fa83a2f",
        "fields": {
            "website": "http://www.froghollow.bc.ca",
            "jurisdiction": "Private",
            "name": "Frog Hollow Neighbourhood House Garden 1",
            "street_number": "2703",
            "street_name": "1st",
            "steward_or_managing_organization": "Frog Hollow Neighbourhood House",
            "mapid": "FA060",
            "year_created": "2007",
            "number_of_plots": 5,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0493039, 49.2698011]
            },
            "street_direction": "E",
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "eva@froghollow.bc.ca",
            "merged_address": "2703 E 1st\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "40f870873f684ac741c7dbad74f0f427b4be5f7b",
        "fields": {
            "website": "http://www.froghollow.bc.ca",
            "jurisdiction": "Private",
            "name": "Frog Hollow Neighbourhood House Garden 2",
            "street_number": "2131",
            "street_name": "Renfrew",
            "steward_or_managing_organization": "Frog Hollow Neighbourhood House",
            "mapid": "FA061",
            "year_created": "2007",
            "number_of_plots": 5,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.044393, 49.2654085]
            },
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "eva@froghollow.bc.ca",
            "merged_address": "2131 Renfrew\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "42ece057d6bf1f32f266197862407d89cc9a79ae",
        "fields": {
            "jurisdiction": "Private",
            "name": "Grandview Elementary Community Garden",
            "street_number": "2055",
            "street_name": "Woodland",
            "steward_or_managing_organization": "Grandview Garden Coordinator (VCH SMART funding)",
            "mapid": "FA066",
            "year_created": "pre 2000",
            "number_of_plots": 24,
            "food_tree_varieties": "yes",
            "other_food_assets": "Earth Tub composter",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.07831, 49.265917]
            },
            "number_of_food_trees": "5",
            "geo_local_area": "Strathcona",
            "notes": "3mx3m community plots in addition to school garden",
            "merged_address": "2055 Woodland Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b121bedb2ea6b38ec261436dcccd945fecd9ae77",
        "fields": {
            "jurisdiction": "Private",
            "name": "Habitat Villa - Metro Housing",
            "street_number": "3859",
            "street_name": "2nd",
            "steward_or_managing_organization": "Habitat Villa/Metro Housing",
            "mapid": "FA070",
            "year_created": "2009",
            "number_of_plots": 4,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1903871, 49.2704557]
            },
            "street_direction": "W",
            "geo_local_area": "West Point Grey",
            "merged_address": "3859 W 2nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "65e9954d5c4fac1215153158d8d6c2a3b9b6f251",
        "fields": {
            "website": "https://www.facebook.com/SeasonssOfFoodVancouver/",
            "jurisdiction": "Park Board",
            "name": "Hastings Community Centre Learning Garden",
            "street_number": "3096",
            "street_name": "Hastings",
            "steward_or_managing_organization": "Seasons of Food",
            "mapid": "FA071",
            "year_created": "2012",
            "number_of_plots": 25,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.03943167, 49.28037436]
            },
            "street_direction": "E",
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "info@seasonsoffood.com\nseasonsoffoodhcc@gmail.com\n604-718-6230",
            "merged_address": "3096 E Hastings St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "05cf9bb610c45878e9dd8050b1035bf81592a053",
        "fields": {
            "jurisdiction": "Private",
            "name": "Hastings St Folk Garden",
            "street_number": "117",
            "street_name": "Hastings",
            "steward_or_managing_organization": "Portland Housing Society",
            "mapid": "FA072",
            "year_created": "2008",
            "number_of_plots": 150,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1015964, 49.2814414]
            },
            "street_direction": "E",
            "geo_local_area": "Downtown",
            "merged_address": "117 E Hastings St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6f048e186bfa44f6f90ca39e8a079bb28010b818",
        "fields": {
            "jurisdiction": "Private",
            "name": "Jacob's Well #2",
            "street_number": "460",
            "street_name": "Hastings",
            "steward_or_managing_organization": "Jacob's Well",
            "mapid": "FA076",
            "year_created": "2006",
            "number_of_plots": 120,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0940499, 49.2811953]
            },
            "street_direction": "E",
            "geo_local_area": "Strathcona",
            "merged_address": "460 E Hastings St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2e7786c0ed07a85f913438ec2cc34623e7123629",
        "fields": {
            "jurisdiction": "Private",
            "name": "Kaslo Gardens Community Vegetable Garden",
            "street_number": "2765",
            "street_name": "Cooperative",
            "steward_or_managing_organization": "Kaslo Gardens Housing Cooperative",
            "mapid": "FA079",
            "year_created": "2009",
            "number_of_plots": 16,
            "street_type": "Way",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0490748, 49.257436]
            },
            "geo_local_area": "Renfrew-Collingwood",
            "merged_address": "2765 Cooperative Way, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7957fd1035e13a7416d574ec9c2833239e726efa",
        "fields": {
            "street_direction": "W",
            "name": "16th & Pine Community Garden",
            "street_number": "1708",
            "street_name": "16th",
            "jurisdiction": "Private",
            "mapid": "FA083",
            "year_created": "2008",
            "number_of_plots": 16,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1437758, 49.2570894]
            },
            "geo_local_area": "Fairview",
            "public_e_mail": "16thpinecommunitygarden@gmail.com",
            "merged_address": "1708 W 16th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "cc405cba1dd2e819460778b61d4004c557fab4d4",
        "fields": {
            "website": "https://kitscc.com/facilities/collaborative-community-garden/",
            "jurisdiction": "Park Board",
            "name": "Kitsilano Community Centre Garden",
            "street_number": "2690",
            "street_name": "Larch",
            "steward_or_managing_organization": "Kitsilano Community Centre Association",
            "mapid": "FA084",
            "year_created": "2014",
            "number_of_plots": 15,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.16207568, 49.26196809]
            },
            "geo_local_area": "Kitsilano",
            "public_e_mail": "kitscc@vancouver.ca\n604-257-6976",
            "merged_address": "2690 Larch St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6bc9e9bb51b504f2d615d652363e294a919bb9b2",
        "fields": {
            "website": "http://www.kiwassa.ca/",
            "jurisdiction": "Private",
            "name": "Kiwassa Neighbourhood House Community Garden",
            "street_number": "2425",
            "street_name": "Oxford",
            "steward_or_managing_organization": "Kiwassa Neighbourhood House",
            "mapid": "FA087",
            "year_created": "2009",
            "number_of_plots": 11,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.05605, 49.2857204]
            },
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "nancym@kiwassa.ca",
            "merged_address": "2425 Oxford St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2dd919d639bf50cb5ce8638ef9ac2148023f403e",
        "fields": {
            "name": "Matheson Heights Housing Coop",
            "street_number": "3554",
            "street_name": "Sparrow",
            "jurisdiction": "Private",
            "mapid": "FA096",
            "year_created": "2013",
            "number_of_plots": 16,
            "street_type": "Place",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0257105, 49.2131744]
            },
            "geo_local_area": "Killarney",
            "merged_address": "3554 Sparrow Place, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7d9ee798054fefa60d1f5534aa8d496938df225c",
        "fields": {
            "website": "http://mcspaddengarden.blogspot.ca/",
            "jurisdiction": "Park Board",
            "name": "McSpadden Park Community Garden",
            "street_number": "2125",
            "street_name": "Victoria",
            "steward_or_managing_organization": "McSpadden Agricultural Project Society",
            "mapid": "FA098",
            "year_created": "1996",
            "number_of_plots": 18,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.06644596, 49.26651352]
            },
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "mcspaddengarden@gmail.com",
            "merged_address": "2125 Victoria\u00a0 Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "22d820e79d2acbeb449a76f802f6e181f2a493d9",
        "fields": {
            "website": "http://www.milrossgardensonmain.com/",
            "jurisdiction": "Private",
            "name": "Millross Gardens on Main",
            "street_number": "989",
            "street_name": "Main",
            "steward_or_managing_organization": "Amacon",
            "mapid": "FA102",
            "year_created": "2013",
            "number_of_plots": 130,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1004947, 49.2762031]
            },
            "geo_local_area": "Downtown",
            "merged_address": "989 Main St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6c5e59c051fd083a50665af9a774dda1266a3e29",
        "fields": {
            "website": "http://pinestreetgardens.org/",
            "jurisdiction": "City",
            "name": "Pine St. Community Garden",
            "street_number": "1605",
            "street_name": "6th",
            "steward_or_managing_organization": "Pine Community Garden Association",
            "mapid": "FA113",
            "year_created": "2006",
            "number_of_plots": 40,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1413634, 49.266421]
            },
            "street_direction": "W",
            "geo_local_area": "Fairview",
            "public_e_mail": "pinestreetcommunitygardens@gmail.com",
            "merged_address": "1605 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "0a216655f13caf1094882bb7228693a7670b9001",
        "fields": {
            "jurisdiction": "Private",
            "name": "Robson Park Coop",
            "street_number": "234",
            "street_name": "15th",
            "steward_or_managing_organization": "Robson Park Co-op",
            "mapid": "FA118",
            "year_created": "2011",
            "number_of_plots": 40,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.099907, 49.2572409]
            },
            "street_direction": "E",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "234 E 15th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "fd36c1171c5b56360e1ddf23eefb66e0db7afc1a",
        "fields": {
            "name": "Sparwood Park",
            "street_number": "6998",
            "street_name": "Arlington",
            "jurisdiction": "Park Board",
            "mapid": "FA126",
            "year_created": "1978",
            "number_of_plots": 0,
            "food_tree_varieties": "Crabapple, hazelnut",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0293224, 49.220271]
            },
            "number_of_food_trees": "17",
            "geo_local_area": "Killarney",
            "merged_address": "6998 Arlington St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "40b914a97a06f817bd3b86362e7ee43a1b2f0f56",
        "fields": {
            "jurisdiction": "Private",
            "name": "St. Augustines Anglican Church",
            "street_number": "8680",
            "street_name": "Hudson",
            "steward_or_managing_organization": "St. Augustines Anglican Church",
            "mapid": "FA130",
            "year_created": "2015",
            "number_of_plots": 8,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.134266, 49.207178]
            },
            "geo_local_area": "Marpole",
            "merged_address": "8680 Hudson  St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e6bd249d92432e9eaa1331e253e370f481f3f6ba",
        "fields": {
            "website": "http://dig.vcn.bc.ca/teaswampgarden",
            "jurisdiction": "Park Board",
            "name": "Tea Swamp Community Garden",
            "street_number": "255",
            "street_name": "16th",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA135",
            "year_created": "2002",
            "number_of_plots": 20,
            "food_tree_varieties": "2 apple, 2 fig, raspberry canes, blueberry, grape",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.09901122, 49.25693534]
            },
            "street_direction": "E",
            "number_of_food_trees": "4",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "teaswampgarden@gmail.com",
            "merged_address": "255 E 16th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8419307df7dafd0eb0db4e4463e6f7bf86df99b9",
        "fields": {
            "jurisdiction": "Private",
            "name": "Urban Acres",
            "street_number": "1601",
            "street_name": "1st",
            "steward_or_managing_organization": "Urban Acres",
            "mapid": "FA143",
            "year_created": "2007",
            "number_of_plots": 30,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1410769, 49.270591]
            },
            "street_direction": "W",
            "geo_local_area": "Fairview",
            "merged_address": "1601 W 1st\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b64d4f21577a2643fc31c5ceb6fcd44ae27d0178",
        "fields": {
            "street_direction": "W",
            "name": "Valdez Park",
            "street_number": "3210",
            "street_name": "22nd",
            "jurisdiction": "Park Board",
            "mapid": "FA144",
            "year_created": "pre-1970",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1764742, 49.2524296]
            },
            "number_of_food_trees": "6",
            "geo_local_area": "Dunbar-Southlands",
            "merged_address": "3210 W 22nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "0770e685c5c9cd1d636ba73cb12bf7138e19bf3d",
        "fields": {
            "website": "http://villagecommunitygardens.com/",
            "jurisdiction": "City",
            "name": "Village on False Creek",
            "street_number": "151",
            "street_name": "1st",
            "steward_or_managing_organization": "Village on False Creek Community Gardens Society",
            "mapid": "FA146",
            "year_created": "2011",
            "number_of_plots": 47,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1086189, 49.2706432]
            },
            "street_direction": "W",
            "number_of_food_trees": "0",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "villagecommunitygardens@gmail.com",
            "merged_address": "151 W 1st\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "a2255d4dcd54b63ae46965b5df1f5765cde3b324",
        "fields": {
            "website": "http://woodlandcommunitygarden.wordpress.com",
            "jurisdiction": "Park Board",
            "name": "Woodland Park Community Garden",
            "street_number": "705",
            "street_name": "Woodland",
            "steward_or_managing_organization": "Village Vancouver Transition Society",
            "mapid": "FA149",
            "year_created": "2013",
            "number_of_plots": 64,
            "food_tree_varieties": "Jonamac Apple, Italian Prune, Pacific Crabapple",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.07383824, 49.27845355]
            },
            "number_of_food_trees": "3",
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "woodlandparkgarden@gmail.com",
            "merged_address": "705 Woodland Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ab3aa84b4ec8e2a12e3e9b7139082d53ad2a41ea",
        "fields": {
            "street_direction": "E",
            "name": "Pender Community Garden",
            "street_number": "2595",
            "street_name": "Pender",
            "jurisdiction": "Private",
            "mapid": "FA156",
            "year_created": "2016",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.052293, 49.28068]
            },
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "2595 E Pender St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "863fb5291a8ea5dbbc125e685ba1e2779b3c3a6f",
        "fields": {
            "website": "https://moberlyartscentre.ca/artists-residencies/",
            "jurisdiction": "Park Board",
            "name": "Moberley Cultural Herb Garden",
            "street_number": "7646",
            "street_name": "Prince Albert",
            "steward_or_managing_organization": "Moberly Arts and Cultural Centre",
            "mapid": "FA158",
            "year_created": "2010",
            "number_of_plots": 5,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.08685681, 49.21496752]
            },
            "geo_local_area": "Sunset",
            "public_e_mail": "Moberlyarts@vancouver.ca",
            "merged_address": "7646 Prince Albert St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ad58ed5f6e86aa7178fffb345dfd32d216e74eb7",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Cambie and 16th Avenue",
            "jurisdiction": "Private",
            "mapid": "FA163",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.114695, 49.256768]
            },
            "geo_local_area": "Riley Park"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b1229b1cd60908c1ce3d49e684596e65b0c32557",
        "fields": {
            "street_direction": "W",
            "name": "Mount Pleasant Demonstration Garden",
            "street_number": "24",
            "street_name": "16th",
            "jurisdiction": "Private",
            "mapid": "FA167",
            "year_created": "2017",
            "number_of_plots": 8,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.105469, 49.256471]
            },
            "geo_local_area": "Riley Park",
            "merged_address": "24 W 16th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d1a28454d5517d75b7a97656671d4706eabe1067",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Oak and 41st",
            "jurisdiction": "Private",
            "mapid": "FA168",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.128507, 49.233617]
            },
            "geo_local_area": "Oakridge"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "880194894363bcef1fe75ec07b7921495d52882e",
        "fields": {
            "jurisdiction": "Private",
            "name": "Brightside Home Foundation - Wallace Wilson",
            "street_number": "1620",
            "street_name": "6th",
            "steward_or_managing_organization": "Brightside Community Homes Foundation",
            "mapid": "FA170",
            "year_created": "2018",
            "number_of_plots": 3,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.071167, 49.264956]
            },
            "street_direction": "E",
            "geo_local_area": "Grandview-Woodland",
            "merged_address": "1620 E 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "eddf14e103b8fb4b460c21cd56b7f92e7213c71d",
        "fields": {
            "jurisdiction": "private",
            "name": "Our Lady of Sorrows Convent",
            "street_number": "2811",
            "street_name": "Venables",
            "steward_or_managing_organization": "Franciscan Sisters of the Eucharist",
            "mapid": "FA173",
            "year_created": "2018",
            "number_of_plots": 9,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.045928, 49.276969]
            },
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "2811 Venables St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "9917959f21be70ee3219ff93332b84f8daa37827",
        "fields": {
            "jurisdiction": "Private",
            "name": "The Hopeful Garden",
            "street_number": "548",
            "street_name": "28th",
            "steward_or_managing_organization": "Inner Hope Youth Ministries",
            "mapid": "FA179",
            "year_created": "2019",
            "number_of_plots": 3,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0929942, 49.2455678]
            },
            "street_direction": "E",
            "geo_local_area": "Riley Park",
            "public_e_mail": "None",
            "merged_address": "548 E 28th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6848791c508397bcf197f172810ec4a7c7c1b5b0",
        "fields": {
            "website": "http://semi-public.com",
            "name": "221A",
            "street_number": "271",
            "street_name": "Union",
            "jurisdiction": "private",
            "mapid": "FA183",
            "year_created": "2019",
            "number_of_plots": 10,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.097379, 49.2778879]
            },
            "geo_local_area": "Strathcona",
            "public_e_mail": "info@semi-public.com",
            "merged_address": "271 Union St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "a59bc98f22d57bc2cd9d4ffdab9fd06db2ef0c46",
        "fields": {
            "jurisdiction": "Private",
            "name": "1755 West 14th - Private apartment building garden",
            "street_number": "1755",
            "street_name": "14th",
            "steward_or_managing_organization": "Apartment residents",
            "mapid": "FA004",
            "year_created": "2007",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1448703, 49.2590496]
            },
            "street_direction": "W",
            "geo_local_area": "Fairview",
            "merged_address": "1755 W 14th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "1ef9beb1aa76516d1573a253cd0fcbedeac6c2bc",
        "fields": {
            "name": "Barclay Heritage Square",
            "street_number": "1433",
            "street_name": "Barclay",
            "jurisdiction": "Park Board",
            "mapid": "FA010",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.13284501, 49.28738755]
            },
            "number_of_food_trees": "2",
            "geo_local_area": "West End",
            "merged_address": "1433 Barclay St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "bf43b566c265f1c65cde070f20b5292ac3a172fa",
        "fields": {
            "jurisdiction": "Private",
            "name": "Bosman Hotel",
            "street_number": "1060",
            "street_name": "Howe",
            "steward_or_managing_organization": "Bosman Hotel Society",
            "mapid": "FA012",
            "year_created": "2011",
            "number_of_plots": 12,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1250943, 49.2791632]
            },
            "geo_local_area": "Downtown",
            "merged_address": "1060 Howe St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8b0f219788e59e95fba5c5c9055374743780fa9a",
        "fields": {
            "website": "http://cambieparkcommunitygarden.blogspot.com/",
            "jurisdiction": "Park Board",
            "name": "Cambie Park Community Garden",
            "street_number": "500",
            "street_name": "54th",
            "steward_or_managing_organization": "Marpole Oakridge Community Association",
            "mapid": "FA016",
            "year_created": "2013",
            "number_of_plots": 30,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1186284, 49.22130853]
            },
            "street_direction": "W",
            "geo_local_area": "Oakridge",
            "public_e_mail": "southvangreenthumbs@gmail.com",
            "merged_address": "500 W 54th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "a50d17efa00aea083893418002c6cfb5a96e47bf",
        "fields": {
            "street_direction": "E",
            "name": "Cartier Park",
            "street_number": "390",
            "street_name": "36th",
            "jurisdiction": "Park Board",
            "mapid": "FA018",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0975115, 49.2376052]
            },
            "number_of_food_trees": "6",
            "geo_local_area": "Riley Park",
            "merged_address": "390 E 36th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "224e49e9c111858dc4aa42837ca7f775bbe85b2f",
        "fields": {
            "website": "http://www.cedarcottagegarden.org",
            "jurisdiction": "Translink",
            "name": "Cedar Cottage Community Garden",
            "street_number": "2021",
            "street_name": "Stainsbury",
            "steward_or_managing_organization": "Cedar Cottage Garden Society",
            "mapid": "FA019",
            "year_created": "2008",
            "number_of_plots": 61,
            "food_tree_varieties": "EARLY MCINTOSH; GOLDEN DELICIOUS SMOOTHEE APPLE; SHAMROCK APPLE; CRIMSON PASSION CHERRY; RAINIER CHERRY; SKEENA CHERRY; DAMSON PLUM; ITALIAN PLUM; REDGLOW PLUM - HARDY; PERSIMMON, plums, fig, pear",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0642552, 49.251444]
            },
            "number_of_food_trees": "13",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "themembershipteam@cedarcottagegarden.org",
            "merged_address": "2021 Stainsbury\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "cc47b7eb86697e7b7910297bb765475d93b773fb",
        "fields": {
            "website": "http://www.cedarcottagegarden.org",
            "jurisdiction": "City",
            "name": "Cedar Cottage Community Garden - Part 2",
            "street_number": "2019",
            "street_name": "Stainsbury",
            "steward_or_managing_organization": "Cedar Cottage Garden Society",
            "mapid": "FA020",
            "year_created": "2009",
            "number_of_plots": 49,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0644448, 49.2512645]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "themembershipteam@cedarcottagegarden.org",
            "merged_address": "2019 Stainsbury\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "dc0945583f562117b5a74879162e9be195fffcfe",
        "fields": {
            "jurisdiction": "Private",
            "name": "Cedar Cottage Neighourhood House Edible Garden",
            "street_number": "4065",
            "street_name": "Victoria",
            "steward_or_managing_organization": "Cedar Cottage Neighbourhood House",
            "mapid": "FA021",
            "year_created": "2013",
            "number_of_plots": 12,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0651476, 49.2488871]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "4065 Victoria Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d25441bd76b5eae52bfa9ca9ff1729cab150dc0b",
        "fields": {
            "name": "Champlain Heights Park",
            "street_number": "3351",
            "street_name": "Maquinna",
            "jurisdiction": "Park Board",
            "mapid": "FA022",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0326603, 49.2164913]
            },
            "number_of_food_trees": "1",
            "geo_local_area": "Killarney",
            "merged_address": "3351 Maquinna\u00a0 Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4104da1eb965e6a701842c4002939700645cf6d6",
        "fields": {
            "jurisdiction": "Private",
            "name": "Champlain Place Community Garden",
            "street_number": "3347",
            "street_name": "58th",
            "steward_or_managing_organization": "BC Housing",
            "mapid": "FA023",
            "year_created": "2010",
            "number_of_plots": 8,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0352463, 49.2167296]
            },
            "street_direction": "E",
            "geo_local_area": "Killarney",
            "merged_address": "3347 E 58th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ff0156efd41feaa4f38bfc7b906e7250fa2c83da",
        "fields": {
            "website": "https://www.facebook.com/chestersfieldgarden?fref=ts",
            "jurisdiction": "City",
            "name": "Chester's Field Garden",
            "street_number": "5333",
            "street_name": "Chester",
            "steward_or_managing_organization": "Fraser Kensington Community Garden Society",
            "mapid": "FA026",
            "year_created": "2009",
            "number_of_plots": 11,
            "food_tree_varieties": "anjou dwarf pear; conference dwarf pear",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0896066, 49.236648]
            },
            "number_of_food_trees": "3",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "chestersfield@gmail.com",
            "merged_address": "5333 Chester\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "eadc2a102f0ad436acebca91d74458515ee6d30a",
        "fields": {
            "jurisdiction": "City",
            "name": "China Creek Housing Co-op",
            "street_number": "1230",
            "street_name": "8th",
            "steward_or_managing_organization": "China Creek Housing Co-op",
            "mapid": "FA030",
            "year_created": "1993",
            "number_of_plots": 30,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0832689, 49.2643106]
            },
            "street_direction": "E",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "1230 E \u00a08th\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "6c53e972d2883f453e7185360804b2f7b327302f",
        "fields": {
            "street_direction": "E",
            "name": "China Creek North Park",
            "street_number": "1001",
            "street_name": "7th",
            "jurisdiction": "Park Board",
            "mapid": "FA031",
            "year_created": "2006",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, cherry, pear, plum",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.07798, 49.2611153]
            },
            "number_of_food_trees": "38",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "1001 E 7th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b83a38956ef4d30ebf756d6fb5b1bc0f98e3712f",
        "fields": {
            "street_direction": "W",
            "name": "Church of the Good Sheppard",
            "street_number": "189",
            "street_name": "11th",
            "jurisdiction": "Private",
            "mapid": "FA032",
            "year_created": "2013",
            "number_of_plots": 8,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1089655, 49.2614867]
            },
            "geo_local_area": "Mount Pleasant",
            "merged_address": "189 W 11th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "5912e908465879a076a1d5a849a2ec63f968087d",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Creekside Community Recreation Centre Collaborative Garden",
            "street_number": "1",
            "street_name": "Athletes",
            "steward_or_managing_organization": "Creekside Community Centre Staff",
            "mapid": "FA042",
            "year_created": "2014",
            "number_of_plots": 23,
            "street_type": "Way",
            "geom": {
                "type": "Point",
                "coordinates": [-123.10358615, 49.27222196]
            },
            "number_of_food_trees": "10",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "thegardenatcreekside@gmail.com\n604-324-3174",
            "merged_address": "1 Athletes Way, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "74c2ffc2b19ac35955b248e546288793ac1055af",
        "fields": {
            "website": "http://www.cypresscommunitygarden.ca/",
            "street_direction": "W",
            "name": "Cypress Community Garden",
            "street_number": "1800",
            "street_name": "6th",
            "jurisdiction": "City",
            "mapid": "FA044",
            "year_created": "1995",
            "number_of_plots": 55,
            "food_tree_varieties": "Clapp's Favourite Pear, dwarf",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1456636, 49.2662772]
            },
            "number_of_food_trees": "15",
            "geo_local_area": "Kitsilano",
            "public_e_mail": "cypress@vcn.bc.ca",
            "merged_address": "1800 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "bef89fd06b89d990f73a10a1e7ce7de069a1d8ff",
        "fields": {
            "jurisdiction": "Private",
            "name": "DTES Market location",
            "street_number": "62",
            "street_name": "Hastings",
            "steward_or_managing_organization": "DTES Market",
            "mapid": "FA049",
            "year_created": "2014",
            "number_of_plots": 6,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1027168, 49.2810918]
            },
            "street_direction": "E",
            "geo_local_area": "Downtown",
            "merged_address": "62 E  Hastings St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f1955e3f53fb50f4d775728e0bd6c2c8eb3787d9",
        "fields": {
            "website": "http://van1crc.org/the-garden/",
            "jurisdiction": "Private",
            "name": "Garden of Eatin'",
            "street_number": "2670",
            "street_name": "Victoria",
            "steward_or_managing_organization": "First Christian Reformed Church",
            "mapid": "FA062",
            "year_created": "2009",
            "number_of_plots": 20,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0658918, 49.2606376]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "garden.van1crc@gmail.com",
            "merged_address": "2670 Victoria Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "39478a3452d36736393f088ec841c9b9ac65273c",
        "fields": {
            "jurisdiction": "Private",
            "name": "Grace Memorial Church",
            "street_number": "803",
            "street_name": "16th",
            "steward_or_managing_organization": "Grace Memorial Church",
            "mapid": "FA064",
            "year_created": "2012",
            "number_of_plots": 15,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0874186, 49.2564075]
            },
            "street_direction": "E",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "803 E 16th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "5f0dfa8a062589e13314d9ff2ed51877096c68e8",
        "fields": {
            "website": "http://kerrisdalecommunitygarden.com",
            "jurisdiction": "City",
            "name": "Kerrisdale Community Garden",
            "street_number": "7500",
            "street_name": "Angus",
            "steward_or_managing_organization": "Kerrisdale Community Garden Committee (under Kerrisdale Community Centre Society)",
            "mapid": "FA080",
            "year_created": "2010",
            "number_of_plots": 22,
            "food_tree_varieties": "anjou dwarf pear, compact stella, shamrock, persimmon",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1482727, 49.2177463]
            },
            "number_of_food_trees": "4",
            "geo_local_area": "Marpole",
            "public_e_mail": "kerrisdalecommunitygarden@gmail.com",
            "merged_address": "7500 Angus Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "637058d2269f955a7d45403c620a31437266b4d5",
        "fields": {
            "website": "http://kitsilanocommunitygarden.blogspot.ca/",
            "jurisdiction": "Park Board",
            "name": "Kitsilano Community Garden",
            "street_number": "2027",
            "street_name": "6th",
            "steward_or_managing_organization": "Kitsilano Community Garden Association",
            "mapid": "FA085",
            "year_created": "1986",
            "number_of_plots": 55,
            "food_tree_varieties": "Apple (2), Pear (2), Cheery (2), Plum (4), Apricot (1), Hazelnut (1), Fig (1), Apple/Pear (2)",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.15102375, 49.26661593]
            },
            "street_direction": "W",
            "number_of_food_trees": "15",
            "geo_local_area": "Kitsilano",
            "public_e_mail": "kitsilanogarden@telus.net\nKitsgarden.membership@gmail.com",
            "merged_address": "2027 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "3a64409b963685ac8b8168777672ae262b1dde0e",
        "fields": {
            "website": "https://courseweb.langara.bc.ca/langaracommunitygarden/",
            "jurisdiction": "Private",
            "name": "Langara College Community Garden",
            "street_number": "6648",
            "street_name": "Ontario",
            "steward_or_managing_organization": "Langara Community Garden Society",
            "mapid": "FA090",
            "year_created": "2011",
            "number_of_plots": 26,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.105789, 49.2245248]
            },
            "geo_local_area": "Sunset",
            "merged_address": "6648 Ontario St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "44f8a99049e207f76c9d47708cb84c1159cc795f",
        "fields": {
            "name": "Maclean Housing",
            "street_number": "705",
            "street_name": "Jackson",
            "jurisdiction": "Private",
            "mapid": "FA092",
            "year_created": "2013",
            "number_of_plots": 65,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0935914, 49.2784286]
            },
            "geo_local_area": "Strathcona",
            "merged_address": "705 Jackson Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2a0fedf1fe4e29dae571c46b85a0e24671f04dd6",
        "fields": {
            "street_direction": "W",
            "name": "Marpole Place expansion",
            "street_number": "1305",
            "street_name": "70th",
            "jurisdiction": "Private",
            "mapid": "FA095",
            "year_created": "2013",
            "number_of_plots": 6,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1347288, 49.2087963]
            },
            "geo_local_area": "Marpole",
            "merged_address": "1305 W 70th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "90d4d30dac49fe2db8e6981e544b72d4b61d22c8",
        "fields": {
            "name": "McCleery Golf Course",
            "street_number": "7188",
            "street_name": "Macdonald",
            "jurisdiction": "Park Board",
            "mapid": "FA097",
            "year_created": "2009",
            "number_of_plots": 0,
            "food_tree_varieties": "Cherry, apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1683146, 49.221493]
            },
            "number_of_food_trees": "5",
            "geo_local_area": "Kerrisdale",
            "merged_address": "7188 Macdonald\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "66c761ba38810f685e2b9c0a0e4fe735f1404b07",
        "fields": {
            "website": "https://moparrc.com/",
            "jurisdiction": "Park Board",
            "name": "Means of Production Garden",
            "street_number": "1001",
            "street_name": "7th",
            "steward_or_managing_organization": "Environmental Youth Alliance",
            "mapid": "FA099",
            "year_created": "2006",
            "number_of_plots": 20,
            "food_tree_varieties": "Mix of cherry, plum, apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.08501953, 49.2655009]
            },
            "street_direction": "E",
            "number_of_food_trees": "25",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "earthandgleaners@gmail.com",
            "merged_address": "1001 E 7th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "fb51550d5cd6b90a5ecbba258f966c4dc2d42514",
        "fields": {
            "website": "http://mobygarden.wordpress.com/",
            "jurisdiction": "City",
            "name": "MOBY Community Garden",
            "street_number": "1737",
            "street_name": "11th",
            "steward_or_managing_organization": "My Own Back Yard",
            "mapid": "FA103",
            "year_created": "2006",
            "number_of_plots": 45,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0688879, 49.2604731]
            },
            "street_direction": "E",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "mobyrevival@gmail.com | mobycommunitygarden@gmail.com",
            "merged_address": "1737 E 11th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4b5a5e774190fef2a747ba097b1874156b724b8d",
        "fields": {
            "name": "New Brighton Park",
            "street_number": "3201",
            "street_name": "New Brighton",
            "jurisdiction": "Park Board",
            "mapid": "FA107",
            "year_created": "2008",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, pear, cherry",
            "street_type": "Road",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0361825, 49.288757]
            },
            "number_of_food_trees": "50",
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "3201 New Brighton Road, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f9619eef4a3a8d32aa1b38ea658533040164e708",
        "fields": {
            "website": "http://pinestreetgardens.org/",
            "jurisdiction": "City and Park Board",
            "name": "Pine  St. Community Orchard",
            "street_number": "1708",
            "street_name": "6th",
            "steward_or_managing_organization": "Pine Community Garden Association",
            "mapid": "FA112",
            "year_created": "2007",
            "number_of_plots": 47,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1435022, 49.2662399]
            },
            "street_direction": "W",
            "geo_local_area": "Fairview",
            "public_e_mail": "pinestreetcommunitygardens@gmail.com",
            "merged_address": "1708 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8daaeb1a38cecc8da67ed452ded9b3222d2bfdf2",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Robson Park Community Garden",
            "street_number": "565",
            "street_name": "Kingsway",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA117",
            "year_created": "1996",
            "number_of_plots": 44,
            "geom": {
                "type": "Point",
                "coordinates": [-123.09231872, 49.25867473]
            },
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "robsongarden@gmail.com",
            "merged_address": "565 Kingsway , Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "1b622202eb18184790c9d0aa7ba38eab14e0a6a8",
        "fields": {
            "name": "Rooted for Life Garden",
            "street_number": "1415",
            "street_name": "Barclay",
            "jurisdiction": "Private",
            "mapid": "FA119",
            "year_created": "2015",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.132872, 49.287355]
            },
            "geo_local_area": "West End",
            "merged_address": "1415 Barclay St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f96301107b3797c831d015fdce074e0f0504879b",
        "fields": {
            "website": "http://dig.vcn.bc.ca/",
            "jurisdiction": "Park Board",
            "name": "Sahalli  Community Garden",
            "street_number": "2398",
            "street_name": "Fraser",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA121",
            "year_created": "1988",
            "number_of_plots": 54,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0885931, 49.2636848]
            },
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "dig@vcn.bc.ca\n604-879-3676",
            "merged_address": "2398 Fraser St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7fd1ed5b236a4615850db6fec89a0dc5b7b75678",
        "fields": {
            "jurisdiction": "City",
            "name": "SPEC Cambie Communal Garden",
            "street_number": "2615",
            "street_name": "Cambie",
            "steward_or_managing_organization": "SPEC",
            "mapid": "FA127",
            "year_created": "2006",
            "number_of_plots": 17,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1155183, 49.2615932]
            },
            "geo_local_area": "Fairview",
            "public_e_mail": "cambiesqvol@gmail.com",
            "merged_address": "2615 Cambie St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "a33fd051fa5b5a9ad19342045b3521aaa6a7dd1c",
        "fields": {
            "jurisdiction": "Private",
            "name": "SPEC Rooftop Garden",
            "street_number": "535",
            "street_name": "Hornby",
            "steward_or_managing_organization": "SPEC",
            "mapid": "FA128",
            "year_created": "2012",
            "number_of_plots": 9,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1178337, 49.2857348]
            },
            "geo_local_area": "Downtown",
            "merged_address": "535 Hornby St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "004bb0cfd5ac4833098c5bdd7cc97fad9a76d057",
        "fields": {
            "jurisdiction": "City",
            "name": "SPEC Vancouver Compost Demonstration Garden",
            "street_number": "2150",
            "street_name": "Maple",
            "steward_or_managing_organization": "SPEC",
            "mapid": "FA129",
            "year_created": "1990",
            "number_of_plots": 0,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1503918, 49.2666383]
            },
            "geo_local_area": "Kitsilano",
            "merged_address": "2150 Maple St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "bb8a638dccf28ff400eae5a62074cd0bf48006c9",
        "fields": {
            "name": "Stanley Park Community Garden",
            "street_number": "975",
            "street_name": "Lagoon",
            "jurisdiction": "Park Board",
            "mapid": "FA131",
            "year_created": "2003",
            "number_of_plots": 32,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.13855459, 49.29367168]
            },
            "public_e_mail": "innersanctum2003@yahoo.ca",
            "merged_address": "975 Lagoon Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7e14fbdf52537e82c3af446b7511bfd61cab54cc",
        "fields": {
            "website": "http://strathconagardens.ca/",
            "jurisdiction": "Park Board",
            "name": "Strathcona Community Garden",
            "street_number": "857",
            "street_name": "Malkin",
            "steward_or_managing_organization": "Strathcona Community Gardeners Soc.",
            "mapid": "FA133",
            "year_created": "1985",
            "number_of_plots": 200,
            "food_tree_varieties": "Bramley's seedling apple; cannor select; cortland; golden delicious smoothee; jonafree; nova mac; shamrock; flemish beauty; hosui; golden spice (hardy); ure pear (hardy); italian plum; pembina plum (hardy); redglow plum (hardy); compact stella cherry; lapin cherry; schatten morello cherry; van cherry; conference dwarf pear; flemish beauty dwarf pear; highland dwarf pear; red sensation dwarf pear; sierra dwarf pear; persimmon fuju and more, Satsuma Plum, Jonamac Apple, Shamrock Apple, Northern Spy Apple, Meteor cherry",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.08797176, 49.27600308]
            },
            "number_of_food_trees": "104",
            "geo_local_area": "Strathcona",
            "public_e_mail": "strathcona.garden.info@gmail.com",
            "merged_address": "857 Malkin Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "42a7f6039084970d796881926649c0c3ca024e3c",
        "fields": {
            "street_direction": "W",
            "name": "The James Garden & Social Community",
            "street_number": "288",
            "street_name": "1st",
            "jurisdiction": "Private",
            "mapid": "FA138",
            "year_created": "2015",
            "number_of_plots": 12,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.111763, 49.269003]
            },
            "geo_local_area": "Mount Pleasant",
            "merged_address": "288 W 1st\u00a0 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e526b427f10c2bb2a28ef904f9b2a05f10ee4971",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Wall Street Community Garden",
            "street_number": "2099",
            "street_name": "Wall",
            "steward_or_managing_organization": "Kiwassa Neighbourhood Services Association",
            "mapid": "FA147",
            "year_created": "1999",
            "number_of_plots": 42,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.06186949, 49.28656975]
            },
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "wallstreetgarden@gmail.com",
            "merged_address": "2099 Wall St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "75fe3b737ffde9f778489bb9f249c5a41529dcdd",
        "fields": {
            "street_direction": "W",
            "name": "Westmount Park",
            "street_number": "4651",
            "street_name": "2nd",
            "jurisdiction": "Park Board",
            "mapid": "FA148",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.2144218, 49.2718445]
            },
            "number_of_food_trees": "2",
            "geo_local_area": "West Point Grey",
            "merged_address": "4651 W 2nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e08fcbdcf943d9456f4fadc9024efd2312660b04",
        "fields": {
            "website": "http://deeproots.ca",
            "jurisdiction": "Private",
            "name": "Deeper Roots Seniors Community Garden",
            "street_number": "5350",
            "street_name": "Baillie",
            "steward_or_managing_organization": "Oakridge Adventist Church",
            "mapid": "FA151",
            "year_created": "2016",
            "number_of_plots": 10,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1218448, 49.2369358]
            },
            "geo_local_area": "South Cambie",
            "merged_address": "5350 Baillie St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "44478953084b7730f9de7aea27b729b011d33ab9",
        "fields": {
            "website": "http://www.villagevancouver.ca/page/aberthau-garden-project-1",
            "street_direction": "W",
            "name": "Aberthau Garden Project",
            "street_number": "4397",
            "street_name": "2nd",
            "jurisdiction": "Park Board",
            "mapid": "FA152",
            "year_created": "2016",
            "number_of_plots": 10,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.20477766, 49.27214278]
            },
            "geo_local_area": "West Point Grey",
            "public_e_mail": "ross@villagevancouver.ca",
            "merged_address": "4397 W 2nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "336965f186ed85cfbbe72ba4f4fb868f158a5f94",
        "fields": {
            "street_direction": "W",
            "name": "Community Alternatives Coop Community Garden",
            "street_number": "1937",
            "street_name": "2nd",
            "jurisdiction": "Private",
            "mapid": "FA154",
            "year_created": "2016",
            "number_of_plots": 20,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.149194, 49.270065]
            },
            "geo_local_area": "Kitsilano",
            "merged_address": "1937 W 2nd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f6b479f6d53fb5e55b03159bfcf44aa8c23aa74d",
        "fields": {
            "website": "http://www.communityalternativescoop.com",
            "street_direction": "SW",
            "name": "Vera Community Garden",
            "street_number": "575",
            "street_name": "Marine",
            "jurisdiction": "Private",
            "mapid": "FA155",
            "year_created": "2016",
            "number_of_plots": 12,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.119179, 49.209683]
            },
            "geo_local_area": "Marpole",
            "merged_address": "575 SW Marine Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b5734c907632ffa33fc47392b51b70c8b256a2be",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Alma and 10th",
            "jurisdiction": "Private",
            "mapid": "FA160",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.185464, 49.26324]
            },
            "geo_local_area": "Kitsilano"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8644fda6bb917192b30a38b3289d0be86e0a06df",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Broadway and Victoria",
            "jurisdiction": "Private",
            "mapid": "FA162",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.064979, 49.262089]
            },
            "geo_local_area": "Kensington-Cedar Cottage"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "32442ed99a8f4b394bba362aa61f34c6a704f6e0",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Dunbar and 39th",
            "jurisdiction": "Private",
            "mapid": "FA165",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.18568, 49.236212]
            },
            "geo_local_area": "Dunbar-Southlands"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "77f7f5d66ccc3f2cfe335019f40ad323f9b6600c",
        "fields": {
            "street_direction": "W",
            "name": "HFBC Housing Foundation",
            "street_number": "2085",
            "street_name": "5th",
            "jurisdiction": "Private",
            "mapid": "FA166",
            "year_created": "2017",
            "number_of_plots": 12,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.152475, 49.267434]
            },
            "geo_local_area": "Kitsilano",
            "merged_address": "2085 W 5th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "41555ec840cfacb25257a5a6247e300144be29c0",
        "fields": {
            "jurisdiction": "Private",
            "name": "Brightside Home Foundation - King's Daughters",
            "street_number": "1400",
            "street_name": "11th",
            "steward_or_managing_organization": "Brightside Community Homes Foundation",
            "mapid": "FA169",
            "year_created": "2018",
            "number_of_plots": 3,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.075082, 49.260319]
            },
            "street_direction": "E",
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "1400 E 11th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "90a94a53776974a563ac3026812d36c1dc95ed70",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Killarney",
            "street_number": "6260",
            "street_name": "Killarney",
            "steward_or_managing_organization": "Killarney community centre",
            "mapid": "FA172",
            "year_created": "2018",
            "number_of_plots": 20,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.04341365, 49.22710826]
            },
            "geo_local_area": "Killarney",
            "public_e_mail": "jennifer.takai@vancouver.ca",
            "merged_address": "6260 Killarney St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "387647d83ee5d4d53462ccc6f66c2e0c3232dcd4",
        "fields": {
            "jurisdiction": "Private",
            "name": "HFBC Housing Foundation",
            "street_number": "2924",
            "street_name": "Venables",
            "steward_or_managing_organization": "HFBC Housing Foundation",
            "mapid": "FA174",
            "year_created": "2016",
            "number_of_plots": 12,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.043281, 49.276211]
            },
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "2924 Venables St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "0ef1b716fbaf9e723f5102648c9145a6d050b794",
        "fields": {
            "website": "https://cedarcottagefoodnetwork.com/projects-events/medicine-wheel-garden-at-john-henry-park/",
            "name": "John Hendry (Trout Lake) Park",
            "street_number": "3300",
            "street_name": "Victoria",
            "jurisdiction": "Park Board",
            "mapid": "FA176",
            "number_of_plots": 4,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.06367871, 49.255098]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "3300 Victoria Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "187eff3be5a8a2fbfd7a3a0752e8f7f6c258a70f",
        "fields": {
            "website": "https://www.rileyparkgarden.org/",
            "street_direction": "E",
            "name": "Riley Park",
            "street_number": "50",
            "street_name": "30th",
            "jurisdiction": "Park Board",
            "mapid": "FA177",
            "year_created": "2018",
            "number_of_plots": 20,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.10448685, 49.24298494]
            },
            "geo_local_area": "Riley Park",
            "public_e_mail": "info@rileyparkgarden.org",
            "merged_address": "50 E 30th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ab912dfefb9adaec8535d36d23551263ac906a17",
        "fields": {
            "website": "https://rcfood.wordpress.com/",
            "jurisdiction": "Park Board",
            "name": "Still Creek Community Garden",
            "street_number": "2750",
            "street_name": "29th",
            "steward_or_managing_organization": "Collingwood Neighbourhood House Society",
            "mapid": "FA181",
            "year_created": "2018",
            "number_of_plots": 45,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.045562, 49.243584]
            },
            "street_direction": "E",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "stillcreekcommunitygarden@gmail.com",
            "merged_address": "2750 E 29th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c1d4518c39c8e168610c20db6d059a31d68ffbdb",
        "fields": {
            "jurisdiction": "Private",
            "name": "Macleod Manor Community Garden",
            "street_number": "8725",
            "street_name": "French",
            "steward_or_managing_organization": "Brightside Community Homes Foundation",
            "mapid": "FA182",
            "year_created": "2019",
            "number_of_plots": 5,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1396302, 49.2069012]
            },
            "geo_local_area": "Marpole",
            "merged_address": "8725 French St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "13afaad95a71d36656f3388520f3f8bf049789dd",
        "fields": {
            "jurisdiction": "Private",
            "name": "Astoria Community Garden",
            "street_number": "369",
            "street_name": "Hawks",
            "steward_or_managing_organization": "managed by DTES NH House",
            "mapid": "FA185",
            "year_created": "2020",
            "number_of_plots": 138,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.087377, 49.28134]
            },
            "geo_local_area": "Strathcona",
            "public_e_mail": "ED@dtesnhouse.ca",
            "merged_address": "369 Hawks Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "df0d18fc4bfbbbfe6f8f787d4658fce2d12033ae",
        "fields": {
            "jurisdiction": "private",
            "name": "FSE Herb Garden (Fransiscan Sister of the Eucharist)",
            "street_number": "2811",
            "street_name": "Venables",
            "steward_or_managing_organization": "Franciscan Sisters of the Eucharist",
            "mapid": "FA186",
            "year_created": "2020",
            "number_of_plots": 5,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.046256, 49.276805]
            },
            "geo_local_area": "Hastings-Sunrise",
            "public_e_mail": "samc@ourfse.org",
            "merged_address": "2811 Venables St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "05e6f6e8063fcd8cc7d5f6cc783776f299bcd801",
        "fields": {
            "jurisdiction": "Private",
            "mapid": "FA001",
            "name": "0 - Private Developments - Community Shared",
            "year_created": "Pre-2010",
            "number_of_plots": 507
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ed605ffa6543ea98fbf5eb41d95873490ca21234",
        "fields": {
            "name": "Arbutus Village Park",
            "street_number": "4202",
            "street_name": "Valley",
            "jurisdiction": "Park Board",
            "mapid": "FA008",
            "number_of_plots": 0,
            "food_tree_varieties": "Crabapple",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1549951, 49.2507172]
            },
            "number_of_food_trees": "9",
            "geo_local_area": "Arbutus-Ridge",
            "merged_address": "4202 Valley Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4a824d541bbe2cb0f3fab41ed94e179bfbdf5292",
        "fields": {
            "website": "http://brewerycreekgarden.wix.com/home",
            "jurisdiction": "Park Board",
            "name": "Brewery Creek Community Garden",
            "street_number": "2390",
            "street_name": "Brunswick",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA013",
            "year_created": "2012",
            "number_of_plots": 40,
            "food_tree_varieties": "Bramley's seedling apple; cortland apple; early macintosh apple; Jonafree apple; Jonagold apple; Lodi apple; Nova Mac apple; Evans cherry - hardy; Juliet cherry - hardy; Persimmon fuju; van cherry",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.09573323, 49.26416489]
            },
            "number_of_food_trees": "11",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "brewerycreekgarden@gmail.com",
            "merged_address": "2390 Brunswick St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4ca0be5e1cb2756728b0e58fdd5107ac49524b48",
        "fields": {
            "street_direction": "N",
            "name": "Burrard View Park",
            "street_number": "650",
            "street_name": "Penticton",
            "jurisdiction": "Park Board",
            "mapid": "FA014",
            "number_of_plots": 0,
            "food_tree_varieties": "Cherry",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0519175, 49.2912065]
            },
            "number_of_food_trees": "1",
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "650 N Penticton St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "159210f62712e339c46227d83eabab49212ec9b7",
        "fields": {
            "name": "Callister Park",
            "street_number": "2875",
            "street_name": "Oxford",
            "jurisdiction": "Park Board",
            "mapid": "FA015",
            "year_created": "pre-1970",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0453833, 49.28618]
            },
            "number_of_food_trees": "4",
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "2875 Oxford St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "51e0e87563af5c0ee7129bb16fe390540f3fa458",
        "fields": {
            "website": "http://www.charlesongarden.ca/",
            "jurisdiction": "Park Board",
            "name": "Charleson Park Community Garden",
            "street_number": "999",
            "street_name": "Charleson",
            "steward_or_managing_organization": "False Creek South Neighbourhood Association",
            "mapid": "FA025",
            "year_created": "2013",
            "number_of_plots": 38,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.12573796, 49.26776479]
            },
            "geo_local_area": "Fairview",
            "public_e_mail": "charlesongarden@gmail.com",
            "merged_address": "999 Charleson St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7d6f66c5ab5eb7b31c3329b878d2d90f1a405210",
        "fields": {
            "website": "http://cityviewchurch.ca/",
            "jurisdiction": "Private",
            "name": "Cityview Baptist Church",
            "street_number": "4370",
            "street_name": "Sophia",
            "steward_or_managing_organization": "Neighbours",
            "mapid": "FA036",
            "year_created": "2008",
            "number_of_plots": 6,
            "food_tree_varieties": "Heritage apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.099148, 49.2459664]
            },
            "number_of_food_trees": "1",
            "geo_local_area": "Riley Park",
            "public_e_mail": "cityview.community.garden@gmail.com",
            "merged_address": "4370 Sophia\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d6193b62d3305482544b495ea7823417c818df4f",
        "fields": {
            "website": "http://rcfsi.blogspot.ca",
            "jurisdiction": "Translink",
            "name": "Collingwood Community Gardens",
            "street_number": "3100",
            "street_name": "Vanness",
            "steward_or_managing_organization": "Renfrew Collingwood Food Security Institute",
            "mapid": "FA039",
            "year_created": "2006",
            "number_of_plots": 30,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0302, 49.23774]
            },
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "foodsecurity@cnh.bc.ca",
            "merged_address": "3100 Vanness Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c57e53e24ba052464242ed6773319a0bd6f9c036",
        "fields": {
            "website": "http://www.copleycommunityorchard.com",
            "jurisdiction": "City",
            "name": "Copley Community Orchard",
            "street_number": "3590",
            "street_name": "Copley",
            "steward_or_managing_organization": "Copley Community Orchard Society",
            "mapid": "FA040",
            "year_created": "2012",
            "number_of_plots": 3,
            "food_tree_varieties": "range of varieties of perenial fruit and vegetables",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0578738, 49.2498017]
            },
            "number_of_food_trees": "100",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "membership@copleycommunityorchard.com",
            "merged_address": "3590 Copley St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2441f53073a74f2cfe0e1507c57fc7993f41a516",
        "fields": {
            "jurisdiction": "Private",
            "name": "Davie Village Garden",
            "street_number": "1157",
            "street_name": "Burrard",
            "steward_or_managing_organization": "Vancouver Public Space Network",
            "mapid": "FA045",
            "year_created": "2009",
            "number_of_plots": 100,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1293018, 49.2795117]
            },
            "geo_local_area": "West End",
            "public_e_mail": "dvgarden@gmail.com",
            "merged_address": "1157 Burrard\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "81e8324ab5defa6f01e40b2bfe5af6d0420d7f71",
        "fields": {
            "website": "http://www.digsvancouver.ca/",
            "jurisdiction": "Private",
            "name": "Dowtown Intercultural Gardeners Society (DIGS)",
            "street_number": "1081",
            "street_name": "Burrard",
            "steward_or_managing_organization": "Downtown Intercultural Gardeners Society",
            "mapid": "FA048",
            "year_created": "2011",
            "number_of_plots": 46,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1290006, 49.2805963]
            },
            "notes": "corrected from 120 to 46 (28 plots + 18 planters) in 2016",
            "geo_local_area": "West End",
            "public_e_mail": "digsvancouver@gmail.com",
            "merged_address": "1081 Burrard St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c5889b8130b60d0d0c23ae513992a8607b045b8c",
        "fields": {
            "jurisdiction": "Private",
            "name": "Dunbar and 41st",
            "street_number": "5580",
            "street_name": "Dunbar",
            "steward_or_managing_organization": "shifting growth",
            "mapid": "FA050",
            "year_created": "2013",
            "number_of_plots": 36,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1850682, 49.2358897]
            },
            "geo_local_area": "Dunbar-Southlands",
            "merged_address": "5580 Dunbar St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "50d2296e08b6dcdf2f1dc036390e50f26d7666a1",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Falaise Park",
            "street_number": "3434",
            "street_name": "Falaise",
            "steward_or_managing_organization": "Vancouver Christian School",
            "mapid": "FA056",
            "year_created": "2010",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, cherry, plum, pear, peach",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0300574, 49.2550923]
            },
            "number_of_food_trees": "25",
            "geo_local_area": "Renfrew-Collingwood",
            "merged_address": "3434 Falaise Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e426fdbad3a5e15082ea0c7fa2725b56478febd5",
        "fields": {
            "website": "https://www.facebook.com/FraserlandsCommunityGardening/",
            "jurisdiction": "Park Board",
            "name": "Fraserlands Community Garden (Riverfront Park)",
            "street_number": "2750",
            "street_name": "South Kent",
            "steward_or_managing_organization": "South Vancouver Family Place",
            "mapid": "FA058",
            "year_created": "2014",
            "number_of_plots": 38,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.05065448, 49.20587682]
            },
            "street_direction": "E",
            "geo_local_area": "Killarney",
            "public_e_mail": "fraserlandscommunitygardening@gmail.com",
            "merged_address": "2750 E South Kent St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "dc0c4f89e1438449f34e5f0d0ccb05166033a4c9",
        "fields": {
            "website": "https://rcfood.wordpress.com/",
            "jurisdiction": "Park Board",
            "name": "Gaston Park",
            "street_number": "3470",
            "street_name": "Crowley",
            "steward_or_managing_organization": "Renfrew Collingwood Food Security Institute",
            "mapid": "FA063",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "quince, Asian pear, Saskatoon berry, Italian prune plum",
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0311899, 49.2362316]
            },
            "number_of_food_trees": "11",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "foodsecurity@cnh.bc.ca",
            "merged_address": "3470 Crowley\u00a0 Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b19c323581d647d76e0836c7899463de4f1b1c69",
        "fields": {
            "name": "Grandview Park",
            "street_number": "1657",
            "street_name": "Charles",
            "jurisdiction": "Park Board",
            "mapid": "FA067",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "Plum espalier",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0705385, 49.2735193]
            },
            "number_of_food_trees": "yes",
            "geo_local_area": "Grandview-Woodland",
            "merged_address": "1657 Charles St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b84560209c2d20812f66930285670d89c71cb7d7",
        "fields": {
            "website": "http://gwfoodconnection.wordpress.com/",
            "jurisdiction": "Private",
            "name": "Grandview Terrace",
            "street_number": "2075",
            "street_name": "Woodland",
            "steward_or_managing_organization": "BC Housing",
            "mapid": "FA068",
            "year_created": "2011",
            "number_of_plots": 12,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0736131, 49.2662333]
            },
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "gwfcnetwork@gmail.com",
            "merged_address": "2075 Woodland Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2744c62c5e4463c0a64215d7030bf5e737b392e3",
        "fields": {
            "street_direction": "E",
            "name": "Grass Roots Community Garden",
            "street_number": "478",
            "street_name": "Hastings",
            "jurisdiction": "Private",
            "mapid": "FA069",
            "number_of_plots": 10,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0936723, 49.2809398]
            },
            "geo_local_area": "Strathcona",
            "merged_address": "478 E \u00a0Hastings\u00a0 St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "07e99632bba52864394d5eb4b574a0113290d9a8",
        "fields": {
            "jurisdiction": "Private",
            "name": "Hemlock Court",
            "street_number": "1411",
            "street_name": "17th",
            "steward_or_managing_organization": "Hemlock Court Housing/Metro Housing",
            "mapid": "FA073",
            "year_created": "2010",
            "number_of_plots": 4,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0754088, 49.2557102]
            },
            "street_direction": "E",
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "1411 E 17th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "5cfb86e78722a83f6e0904f5a0c5a039f5135460",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Beaconsfield Park Community Garden",
            "street_number": "3215",
            "street_name": "Slocan",
            "steward_or_managing_organization": "Beaconsfield Garden Society",
            "mapid": "FA074",
            "year_created": "2015",
            "number_of_plots": 40,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.05060617, 49.25563874]
            },
            "number_of_food_trees": "40",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "beaconsfieldgarden@gmail.com",
            "merged_address": "3215 Slocan St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c87b520105f3238a18187cc5fb3f216c7ea2a86e",
        "fields": {
            "jurisdiction": "Private",
            "name": "Jacob's Well #1",
            "street_number": "449",
            "street_name": "Hastings",
            "steward_or_managing_organization": "Jacob's Well",
            "mapid": "FA075",
            "year_created": "2006",
            "number_of_plots": 120,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0942905, 49.2813078]
            },
            "street_direction": "E",
            "geo_local_area": "Strathcona",
            "merged_address": "449 E Hastings St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "5b0962635e9fbc8355bfaaf663c0e6195fdc86c8",
        "fields": {
            "website": "http://www.theworldinagarden.com",
            "jurisdiction": "City",
            "name": "The World in a Garden",
            "street_number": "7249",
            "street_name": "Cypress",
            "steward_or_managing_organization": "World in a Garden",
            "mapid": "FA077",
            "year_created": "2013",
            "number_of_plots": 12,
            "food_tree_varieties": "9",
            "other_food_assets": "pear, apple, fig, plum, almond",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.150444, 49.220092]
            },
            "geo_local_area": "Kerrisdale",
            "public_e_mail": "devorahtradburks@gmail.com",
            "merged_address": "7249 Cypress St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "31f6bb144fed40397fd315ffc8f2c970d73b9146",
        "fields": {
            "jurisdiction": "City",
            "name": "John McBride Community Garden",
            "street_number": "1850",
            "street_name": "Spyglass",
            "steward_or_managing_organization": "Creek Community Gardeners (under  False Creek South Neig'd  Assoc.)",
            "mapid": "FA078",
            "year_created": "2010",
            "number_of_plots": 46,
            "street_type": "Place",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1152216, 49.2696835]
            },
            "geo_local_area": "Fairview",
            "public_e_mail": "mcbridegarden@gmail.com",
            "merged_address": "1850 Spyglass Place, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b0685e0332388cc6356a78fbc80176f8a475eff4",
        "fields": {
            "website": "https://cedarcottagefoodnetwork.com/",
            "jurisdiction": "Park Board",
            "name": "Kingscrest Park Community Garden",
            "street_number": "4150",
            "street_name": "Knight",
            "steward_or_managing_organization": "Cedar Cottage Food Network Society",
            "mapid": "FA081",
            "year_created": "2014",
            "number_of_plots": 20,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.07433222, 49.24700923]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "kingcrestgarden@gmail.com",
            "merged_address": "4150 Knight St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "989e81a651988dd3ad9711cc86e7845588e20383",
        "fields": {
            "jurisdiction": "Private",
            "name": "Kits Village Collaborative Garden",
            "street_number": "1407",
            "street_name": "Laburnum",
            "steward_or_managing_organization": "Village Vancouver",
            "mapid": "FA082",
            "year_created": "2011",
            "food_tree_varieties": "Cortland apple; Golden Reinette Apple; dwaf Anjou pear; dwarf Red Sensation pear; Persimmon Fuju",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1514277, 49.273327]
            },
            "number_of_food_trees": "5",
            "geo_local_area": "Kitsilano",
            "public_e_mail": "ross@villagevancouver.ca",
            "merged_address": "1407 Laburnum St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "bbb22215c2ad1a33e96dfcdf4b2530815b4a455d",
        "fields": {
            "website": "http://www.kitshouse.org",
            "jurisdiction": "Private",
            "name": "Kitsilano Neighbourhood House",
            "street_number": "3683",
            "street_name": "4th",
            "steward_or_managing_organization": "Kitsilano Neighbourhood House",
            "mapid": "FA086",
            "year_created": "2008",
            "number_of_plots": 5,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1852422, 49.2686566]
            },
            "street_direction": "W",
            "geo_local_area": "Kitsilano",
            "merged_address": "3683 W 4th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "a411f9f7ec6436a0f8f434bb76d8e29917170c71",
        "fields": {
            "website": "http://facebook.com/ladybugcommunitygarden",
            "jurisdiction": "City",
            "name": "Ladybug Garden",
            "street_number": "1688",
            "street_name": "8th",
            "steward_or_managing_organization": "The Britannia Community Services Centre Society",
            "mapid": "FA088",
            "year_created": "2010",
            "number_of_plots": 48,
            "food_tree_varieties": "plum, apple, crab apple, fig",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0703978, 49.2629678]
            },
            "notes": "6",
            "street_direction": "E",
            "number_of_food_trees": "7",
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "gwfcnetwork@gmail.com",
            "merged_address": "1688 E 8th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c06fa5ebe029c645ffbdf88765993b7ed7be8df7",
        "fields": {
            "jurisdiction": "Private",
            "name": "Let\u2019s Grow Together! Community Garden",
            "street_number": "2475",
            "street_name": "Franklin",
            "steward_or_managing_organization": "St. David of Wales Angclican Church",
            "mapid": "FA091",
            "year_created": "2015",
            "number_of_plots": 6,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.05491, 49.282211]
            },
            "geo_local_area": "Hastings-Sunrise",
            "merged_address": "2475 Franklin St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "51bc216f36b6b78e1aa506411cbacecac4aad82e",
        "fields": {
            "website": "http://maplecommunitygarden.ca/",
            "jurisdiction": "City",
            "name": "Maple Community Garden",
            "street_number": "1900",
            "street_name": "6th",
            "steward_or_managing_organization": "None",
            "mapid": "FA093",
            "year_created": "1996",
            "number_of_plots": 53,
            "food_tree_varieties": "Fig, Apple, Plum",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.148045, 49.2663131]
            },
            "street_direction": "W",
            "number_of_food_trees": "5",
            "geo_local_area": "Kitsilano",
            "public_e_mail": "info@maplecommunitygarden.ca",
            "merged_address": "1900 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "aab4d2aa360ef093a3227196e6b0bdb55f8cb64f",
        "fields": {
            "jurisdiction": "Private",
            "name": "Marpole Family Place",
            "street_number": "1305",
            "street_name": "70th",
            "steward_or_managing_organization": "Marpole Family Place",
            "mapid": "FA094",
            "year_created": "2012",
            "number_of_plots": 8,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1347288, 49.2087963]
            },
            "street_direction": "W",
            "geo_local_area": "Marpole",
            "merged_address": "1305 W 70th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "286270b9cd10add35b242c220e81007a6739b135",
        "fields": {
            "name": "Memorial West Park",
            "street_number": "4701",
            "street_name": "Dunbar",
            "jurisdiction": "Park Board",
            "mapid": "FA100",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, pear, cherry",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1852852, 49.2442721]
            },
            "number_of_food_trees": "15",
            "geo_local_area": "Dunbar-Southlands",
            "merged_address": "4701 Dunbar St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "f1886bb83fd0aa5d864a8892c2c0533cd18b2bf8",
        "fields": {
            "street_direction": "W",
            "name": "Menno Simmons centre",
            "street_number": "4000",
            "street_name": "11th",
            "jurisdiction": "Private",
            "mapid": "FA101",
            "year_created": "2013",
            "number_of_plots": 10,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1939437, 49.2626337]
            },
            "geo_local_area": "West Point Grey",
            "merged_address": "4000 W 11th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "13d45af7e0a2d2faabee8ee1e8e587effc847701",
        "fields": {
            "website": "https://www.mole-hill.ca/mole-hill-community-garden/",
            "jurisdiction": "Private",
            "name": "Mole Hill Community Gardens",
            "street_number": "1100 block",
            "street_name": "Jepson-Young",
            "steward_or_managing_organization": "Mole Hill Community Housing Society",
            "mapid": "FA104",
            "year_created": "2003",
            "number_of_plots": 70,
            "food_tree_varieties": "Italian Prune Plum",
            "street_type": "Lane",
            "geom": {
                "type": "Point",
                "coordinates": [-123.130556, 49.282056]
            },
            "number_of_food_trees": "1",
            "geo_local_area": "West End",
            "public_e_mail": "admin@molehillhousing.ca",
            "merged_address": "1100 block of Jepson-Young Lane, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8c1ac38f4afb82c13c88cdd0e440d4c6982fff99",
        "fields": {
            "website": "https://www.facebook.com/MountPleasantCommunityGarden/",
            "jurisdiction": "Park Board",
            "name": "Mount Pleasant Community Garden",
            "street_number": "3161",
            "street_name": "Ontario",
            "steward_or_managing_organization": "Urban Diggers Society",
            "mapid": "FA105",
            "year_created": "2012",
            "number_of_plots": 30,
            "food_tree_varieties": "1 early macintosh apple; 1 fuji red sport apple; 2 italian plum; 1 lapins cherry; 1 stella cherry; 1 anjou pear dwarf; 1 red sensation pear dwarf; 1 persimmon fuju (espalier), lemon, Jonamac, Shamrock, Stella Cherry, Golden Russet",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.10564148, 49.25739572]
            },
            "number_of_food_trees": "16",
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "mtpleasantcommunitygarden@gmail.com",
            "merged_address": "3161 Ontario St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "b9194d36aea07ddbbd348ad87096e4d8c8815750",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Nelson Park Community Garden",
            "street_number": "1020",
            "street_name": "Bute",
            "steward_or_managing_organization": "Nelson Park Community Garden Society",
            "mapid": "FA106",
            "year_created": "2008",
            "number_of_plots": 38,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.13022752, 49.28308969]
            },
            "notes": "Expansion in 2014 - 35 beds including accessible ones",
            "number_of_food_trees": "yes",
            "geo_local_area": "West End",
            "public_e_mail": "nelsonparkgarden@gmail.com",
            "merged_address": "1020 Bute St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "508e0515685fd460c65deb62863709ee53ba19f1",
        "fields": {
            "website": "https://rcfood.wordpress.com/norquay-orchard/",
            "jurisdiction": "City",
            "name": "Norquay Community Learning Orchard",
            "street_number": "2732",
            "street_name": "Horley",
            "steward_or_managing_organization": "Collingwood Neighbourhood House Society",
            "mapid": "FA108",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "Heritage apples, pears, Asian pear, cherry, plums, fig, garry oak",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0491218, 49.2403942]
            },
            "number_of_food_trees": "8",
            "geo_local_area": "Renfrew-Collingwood",
            "public_e_mail": "foodsecurity@cnh.bc.ca",
            "merged_address": "2732 Horley St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "668b27bce56c18c2caf40f0e3fc5f7dec498a0f5",
        "fields": {
            "name": "Oppenheimer Park Medicine Wheel Garden",
            "street_number": "488",
            "street_name": "Powell",
            "jurisdiction": "Park Board",
            "mapid": "FA109",
            "year_created": "2012",
            "number_of_plots": 8,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.09361921, 49.28278848]
            },
            "geo_local_area": "Strathcona",
            "merged_address": "488 Powell St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c2714c5972c450370e4a823cdc2ca5500989ccee",
        "fields": {
            "website": "http://pandoraparkgarden.wordpress.com/",
            "jurisdiction": "Park Board",
            "name": "Pandora Park Community Garden",
            "street_number": "2325",
            "street_name": "Franklin",
            "steward_or_managing_organization": "Pandora Park Community Garden Society",
            "mapid": "FA110",
            "year_created": "2009",
            "number_of_plots": 66,
            "food_tree_varieties": "2 apple, 2 plum",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.05937732, 49.28239193]
            },
            "number_of_food_trees": "4",
            "geo_local_area": "Grandview-Woodland",
            "public_e_mail": "pandoraparkcommunitygarden@gmail.com",
            "merged_address": "2325 Franklin St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "d22bec6f11bdb0db95c93caf956972a786a8bde2",
        "fields": {
            "website": "http://www.farmerson57th.ca",
            "jurisdiction": "Private",
            "name": "Farmers at 57th",
            "street_number": "700",
            "street_name": "57th",
            "steward_or_managing_organization": "Farmers on 57th",
            "mapid": "FA111",
            "year_created": "2009",
            "number_of_plots": 32,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1169049, 49.219033]
            },
            "street_direction": "W",
            "geo_local_area": "Oakridge",
            "public_e_mail": "hello@farmerson57th.ca",
            "merged_address": "700 W 57th St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "16362d2a99beac5edfff2076bbedc23b537f114e",
        "fields": {
            "website": "http://pinestreetgardens.org/",
            "jurisdiction": "City and Park Board",
            "name": "Pine Street Community Garden (6th and Fir Park)",
            "street_number": "1605",
            "street_name": "6th",
            "steward_or_managing_organization": "Pine Street Community Garden Society",
            "mapid": "FA114",
            "year_created": "2015",
            "number_of_plots": 16,
            "food_tree_varieties": "Apple, pear, plum, cherry",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.14208457, 49.26633958]
            },
            "street_direction": "W",
            "number_of_food_trees": "16",
            "geo_local_area": "Fairview",
            "public_e_mail": "pinestreetcommunitygardens@gmail.com",
            "merged_address": "1605 W 6th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "aa64cead743908de07791bc674c79d75adee8cf0",
        "fields": {
            "jurisdiction": "Private",
            "name": "Briarpatch Garden",
            "street_number": "248",
            "street_name": "Princess",
            "steward_or_managing_organization": "Servants Canada",
            "mapid": "FA115",
            "year_created": "2014",
            "number_of_plots": 20,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.091439, 49.282147]
            },
            "geo_local_area": "Strathcona",
            "merged_address": "248 Princess Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "04d518e6c54ab9beb1f876aa53f57413f5734149",
        "fields": {
            "name": "Ross Park",
            "street_number": "7402",
            "street_name": "Ross",
            "jurisdiction": "Park Board",
            "mapid": "FA120",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "Apple, pear, cherry",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0817007, 49.2161584]
            },
            "number_of_food_trees": "15",
            "geo_local_area": "Sunset",
            "merged_address": "7402 Ross St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "023cd1f31c78cdec1ff3bdf3e1f19fe83291132a",
        "fields": {
            "jurisdiction": "Private",
            "name": "South Vancouver Family Place 1",
            "street_number": "7710",
            "street_name": "Nanaimo",
            "steward_or_managing_organization": "South Vancouver Family Place",
            "mapid": "FA123",
            "year_created": "2008",
            "number_of_plots": 8,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0593383, 49.2143436]
            },
            "geo_local_area": "Victoria-Fraserview",
            "merged_address": "7710 Nanaimo St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "5d9924ed2ac4f3d2896fcb141b6cc5b1ae80d4a0",
        "fields": {
            "jurisdiction": "Private",
            "name": "South Vancouver Family Place 2",
            "street_number": "7715",
            "street_name": "Muirfield",
            "steward_or_managing_organization": "South Vancouver Family Place",
            "mapid": "FA124",
            "year_created": "2011",
            "number_of_plots": 3,
            "street_type": "Drive",
            "geom": {
                "type": "Point",
                "coordinates": [-123.056519, 49.2141567]
            },
            "geo_local_area": "Victoria-Fraserview",
            "merged_address": "7715 Muirfield Drive, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "e21c3205f7fff693610fe79bb08c9e511e54c9b8",
        "fields": {
            "jurisdiction": "Private",
            "name": "South Vancouver Youth Centre Day Program",
            "street_number": "4866",
            "street_name": "Fraser",
            "steward_or_managing_organization": "South Van Youth Ctr Day Program",
            "mapid": "FA125",
            "year_created": "2008",
            "number_of_plots": 3,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0902841, 49.2406636]
            },
            "geo_local_area": "Kensington-Cedar Cottage",
            "merged_address": "4866 Fraser St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "76ebbba5bb042495f48ceced13cf1bd65db4a51d",
        "fields": {
            "website": "https://mysunset.net/",
            "street_direction": "E",
            "name": "Sunset Park",
            "street_number": "404",
            "street_name": "51st",
            "jurisdiction": "Park Board",
            "mapid": "FA134",
            "year_created": "2009",
            "number_of_plots": 0,
            "food_tree_varieties": "Fruit",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.09795356, 49.22235386]
            },
            "number_of_food_trees": "29",
            "geo_local_area": "Sunset",
            "public_e_mail": "ki.plants@gmail.com",
            "merged_address": "404 E 51st Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "63e31f71926cbc67251fd750090b013cfcff8e17",
        "fields": {
            "jurisdiction": "Private",
            "name": "Tenth Church",
            "street_number": "11",
            "street_name": "10th",
            "steward_or_managing_organization": "Tenth Church",
            "mapid": "FA136",
            "year_created": "2012",
            "number_of_plots": 10,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1058605, 49.2623383]
            },
            "street_direction": "W",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "11 W 10th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "2d678e5f197273497d5e7addfa577c0300acf10a",
        "fields": {
            "jurisdiction": "Private",
            "name": "The Rise on Cambie",
            "street_number": "485",
            "street_name": "8th",
            "steward_or_managing_organization": "Strata Council",
            "mapid": "FA139",
            "year_created": "2008",
            "number_of_plots": 18,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1144868, 49.2640067]
            },
            "street_direction": "W",
            "geo_local_area": "Mount Pleasant",
            "merged_address": "485 W 8th Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "dc2344bdaab67d09d4f57b311ef5c90611a725f7",
        "fields": {
            "website": "https://earthand.com/category/trillium-north-park/",
            "jurisdiction": "Park Board",
            "name": "Trillium Park North Artists Garden",
            "street_number": "580",
            "street_name": "Malkin",
            "steward_or_managing_organization": "Earthand Gleaners Society",
            "mapid": "FA140",
            "year_created": "2014",
            "number_of_plots": 4,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.09269404, 49.27528736]
            },
            "geo_local_area": "Strathcona",
            "public_e_mail": "earthandgleaners@gmail.com",
            "merged_address": "580 Malkin Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4e95d203a49af6597e6e076eff1408063f2b7e23",
        "fields": {
            "jurisdiction": "City",
            "name": "Tupper Neighbourhood Greenway",
            "street_number": "400",
            "street_name": "23rd",
            "steward_or_managing_organization": "Tupper Greenway Urban Orchard Project",
            "mapid": "FA141",
            "year_created": "2011",
            "number_of_plots": 0,
            "food_tree_varieties": "apple trees, berry bushes and fruit vines",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.093947, 49.250166]
            },
            "street_direction": "E",
            "number_of_food_trees": "6",
            "geo_local_area": "Riley Park",
            "merged_address": "400 E 23rd Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "59fc0fbff229c5843c3716446a51807ae58e08d7",
        "fields": {
            "jurisdiction": "City",
            "name": "UP! Elgin community garden",
            "street_number": "5332",
            "street_name": "Windsor",
            "steward_or_managing_organization": "Fraser Kensington Community Garden Society",
            "mapid": "FA142",
            "year_created": "2010",
            "number_of_plots": 24,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.084388, 49.2365575]
            },
            "number_of_food_trees": "3",
            "geo_local_area": "Kensington-Cedar Cottage",
            "public_e_mail": "upelgincommunitygarden@googlegroups.com",
            "merged_address": "5332 Windsor St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "8dc446624da3d6df4b053d82b0ddd57eec232041",
        "fields": {
            "jurisdiction": "Park Board",
            "name": "Van Dusen Botanical Gardens",
            "street_number": "5251",
            "street_name": "Oak",
            "steward_or_managing_organization": "Van Dusen Botanical Garden Association",
            "mapid": "FA145",
            "number_of_plots": 0,
            "food_tree_varieties": "Heritage apple",
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1280384, 49.2375047]
            },
            "number_of_food_trees": "yes",
            "geo_local_area": "Shaughnessy",
            "merged_address": "5251 Oak St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "655981318b4e97d552299fa2f7b03d33edd3816a",
        "fields": {
            "jurisdiction": "Private",
            "name": "City Heights",
            "street_number": "155",
            "street_name": "37",
            "steward_or_managing_organization": "City Heights",
            "mapid": "FA157",
            "year_created": "2016",
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.102833, 49.232228]
            },
            "street_direction": "E",
            "geo_local_area": "Sunset",
            "merged_address": "155 E 37 Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4f89e85b7e3c63d9ca033caec6446693b263b89f",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "4th and MacDonald",
            "jurisdiction": "Private",
            "mapid": "FA159",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.167928, 49.268683]
            },
            "geo_local_area": "Kitsilano"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7b3585841b962eaab562a3b259cffb7fd6a939c0",
        "fields": {
            "steward_or_managing_organization": "Shifting Growth",
            "name": "Broadway and Alma",
            "jurisdiction": "Private",
            "mapid": "FA161",
            "year_created": "2017",
            "number_of_plots": 100,
            "geom": {
                "type": "Point",
                "coordinates": [-123.185381, 49.264105]
            },
            "geo_local_area": "Kitsilano"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "7be83e805abffdc7d0cfcf1c9ef86bfae8f98f62",
        "fields": {
            "jurisdiction": "Private",
            "name": "Chilean Housing Coop",
            "street_number": "3390",
            "street_name": "School",
            "steward_or_managing_organization": "Chilean Housing Coop",
            "mapid": "FA164",
            "year_created": "2017",
            "number_of_plots": 10,
            "street_type": "Av",
            "geom": {
                "type": "Point",
                "coordinates": [-123.032907, 49.23112]
            },
            "geo_local_area": "Killarney",
            "merged_address": "3390 School Av, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "c13eb7e448c0229a3108f96e5e931d715468c019",
        "fields": {
            "jurisdiction": "Private",
            "name": "Chinatown Peace Church",
            "street_number": "375",
            "street_name": "Pender",
            "steward_or_managing_organization": "Chinatown Peace Church",
            "mapid": "FA171",
            "year_created": "2018",
            "number_of_plots": 10,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.095684, 49.280471]
            },
            "street_direction": "E",
            "geo_local_area": "Strathcona",
            "merged_address": "375 E Pender St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "ebb9a1696f56013630a4882fb44efa8de8f02c5b",
        "fields": {
            "jurisdiction": "Private",
            "name": "HFBC Housing Foundation",
            "street_number": "2950",
            "street_name": "Euclid",
            "steward_or_managing_organization": "HFBC Housing Foundation",
            "mapid": "FA175",
            "year_created": "2016",
            "number_of_plots": 12,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.043697, 49.240111]
            },
            "geo_local_area": "Renfrew-Collingwood",
            "merged_address": "2950 Euclid St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "1da86712a61f85dcb3f3f5a44d188052fc4decd8",
        "fields": {
            "jurisdiction": "Private",
            "name": "Nicholson Towers",
            "street_number": "1115",
            "street_name": "Nelson",
            "steward_or_managing_organization": "Bloomgroup",
            "mapid": "FA178",
            "year_created": "1985",
            "number_of_plots": 28,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.1279113, 49.2828118]
            },
            "geo_local_area": "West End",
            "public_e_mail": "None",
            "merged_address": "1115 Nelson St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "4f92d303ce6aa1f7473925537c7fd92ab1a301f3",
        "fields": {
            "jurisdiction": "Private",
            "name": "Dany Guincher House",
            "street_number": "475",
            "street_name": "Broadway",
            "steward_or_managing_organization": "Jewish Family Services",
            "mapid": "FA180",
            "year_created": "2019",
            "number_of_plots": 3,
            "street_direction": "E",
            "geom": {
                "type": "Point",
                "coordinates": [-123.0935368, 49.2625681]
            },
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "None",
            "merged_address": "475 E Broadway , Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "677555512c9bcd625f7911eb2a0e6f5db22cfd3b",
        "fields": {
            "street_direction": "E",
            "name": "Van Tech secondary school",
            "street_number": "2600",
            "street_name": "Broadway",
            "jurisdiction": "private",
            "mapid": "FA184",
            "number_of_plots": 0,
            "geom": {
                "type": "Point",
                "coordinates": [-123.051705, 49.261776]
            },
            "number_of_food_trees": "5",
            "geo_local_area": "Renfrew-Collingwood",
            "merged_address": "2600 E Broadway , Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "74abb32940f3da65698be092d821ddf1c2590005",
        "fields": {
            "jurisdiction": "private",
            "name": "Centrepoint Gardens",
            "street_number": "2990",
            "street_name": "Quebec",
            "steward_or_managing_organization": "Centrepoint Development",
            "mapid": "FA187",
            "year_created": "2020",
            "number_of_plots": 20,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.102952, 49.258797]
            },
            "geo_local_area": "Mount Pleasant",
            "public_e_mail": "centrepoint.caretaker@hotmail.com",
            "merged_address": "2990 Quebec St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }, {
        "datasetid": "community-gardens-and-food-trees",
        "recordid": "abd7fdd936809c34f1f3523639fb796223f2bdc9",
        "fields": {
            "jurisdiction": "Private",
            "name": "Colonial Arms Vegetable Garden",
            "street_number": "8680",
            "street_name": "Fremlin",
            "steward_or_managing_organization": "Colonial Arms Apartments",
            "mapid": "FA188",
            "year_created": "2020",
            "number_of_plots": 15,
            "street_type": "St",
            "geom": {
                "type": "Point",
                "coordinates": [-123.127177, 49.207365]
            },
            "geo_local_area": "Marpole",
            "public_e_mail": "scottharding8680colonialarms@gmail.com",
            "merged_address": "8680 Fremlin St, Vancouver, BC"
        },
        "record_timestamp": "2021-03-29T03:30:27.711-07:00"
    }];

    gardens.forEach(function (garden) {
        database.collection("community-gardens").add(garden);
    });
}