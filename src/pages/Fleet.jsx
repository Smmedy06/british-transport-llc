import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const fleetItems = [
    {
        "id": 1,
        "name": "CAT 308 CR Mini Excavator",
        "category": "Excavator",
        "brand": "Caterpillar",
        "weightClass": "0-10 TONS",
        "specs": {
            "weight": "9,420 kg",
            "power": "53 kW",
            "depth": "4,690 mm"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_308_cr_mini_excavator.jpg"
    },
    {
        "id": 2,
        "name": "CAT 320 GX Excavator",
        "category": "Excavator",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "22,600 kg",
            "power": "108 kW",
            "depth": "6,570 mm"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_320_gx_excavator.jpg"
    },
    {
        "id": 3,
        "name": "CAT 336 GC Excavator",
        "category": "Excavator",
        "brand": "Caterpillar",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "36,800 kg",
            "power": "204 kW",
            "depth": "7,530 mm"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_336_gc_excavator.jpg"
    },
    {
        "id": 4,
        "name": "CAT 395 Heavy Excavator",
        "category": "Excavator",
        "brand": "Caterpillar",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "94,000 kg",
            "power": "405 kW",
            "depth": "9,670 mm"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_395_heavy_excavator.jpg"
    },
    {
        "id": 5,
        "name": "CAT 745 Articulated Truck",
        "category": "Recovery",
        "brand": "Caterpillar",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "32,700 kg",
            "payload": "41,000 kg",
            "capacity": "25.0 m³ load volume"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_745_articulated_truck.jpg"
    },
    {
        "id": 6,
        "name": "CAT 950 GC Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "18,849 kg",
            "power": "168 kW",
            "capacity": "2.9-4.4 m³ (3.75-5.75 yd³) bucket"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_950_gc_wheel_loader_shovel.jpg"
    },
    {
        "id": 7,
        "name": "CAT 992 Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Caterpillar",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "105,882 kg",
            "power": "607 kW",
            "capacity": "11.5-24.5 m³ (15-32 yd³) bucket"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_992_wheel_loader_shovel.jpg"
    },
    {
        "id": 8,
        "name": "CAT D11 Crawler Dozer",
        "category": "Bulldozer",
        "brand": "Caterpillar",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "106,614 kg",
            "power": "634 kW",
            "capacity": "27.2 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_d11_crawler_dozer.jpg"
    },
    {
        "id": 9,
        "name": "CAT D6 Crawler Dozer",
        "category": "Bulldozer",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "23,012 kg",
            "power": "160 kW",
            "capacity": "5.6 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_d6_crawler_dozer.jpg"
    },
    {
        "id": 10,
        "name": "CAT D8T Crawler Dozer (Bulldozer)",
        "category": "Bulldozer",
        "brand": "Caterpillar",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "39,500 kg",
            "power": "264 kW",
            "capacity": "8.6 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_d8t_crawler_dozer_bulldozer.jpg"
    },
    {
        "id": 11,
        "name": "CAT MH3040 Material Handler (Crane)",
        "category": "Crane",
        "brand": "Caterpillar",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "38,500 kg",
            "capacity": "40 Tons",
            "boom": "15.4 m reach"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_mh3040_material_handler_crane.jpg"
    },
    {
        "id": 12,
        "name": "CAT TH1055 Telehandler (Boom Loader)",
        "category": "Boom Loader",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "12,060 kg",
            "power": "81 kW",
            "height": "16.7 m lift"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_cat_th1055_telehandler_boom_loader.jpg"
    },
    {
        "id": 13,
        "name": "Motor Grader 140K",
        "category": "Grader",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "power": "170 HP",
            "width": "3.7 m",
            "weight": "17,500 KG"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_motor_grader_140k.jpg"
    },
    {
        "id": 14,
        "name": "Vibratory Roller CS54B",
        "category": "Roller",
        "brand": "Caterpillar",
        "weightClass": "10-25 TONS",
        "specs": {
            "power": "Tier 4 Final",
            "width": "2.1 m",
            "weight": "10,500 KG"
        },
        "status": "Available",
        "img": "/images/fleet/caterpillar_vibratory_roller_cs54b.jpg"
    },
    {
        "id": 15,
        "name": "Komatsu D155AX-8 Dozer (Bulldozer)",
        "category": "Bulldozer",
        "brand": "Komatsu",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "40,506 kg",
            "power": "264 kW",
            "capacity": "9.4 - 11.9 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_d155ax_8.jpg"
    },
    {
        "id": 16,
        "name": "Komatsu D375A-8 Dozer (Bulldozer)",
        "category": "Bulldozer",
        "brand": "Komatsu",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "74,090 kg",
            "power": "455 kW",
            "capacity": "18.5 - 22.0 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_d375a_8.jpg"
    },
    {
        "id": 17,
        "name": "Komatsu D65EX-18 Dozer (Bulldozer)",
        "category": "Bulldozer",
        "brand": "Komatsu",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "20,697 - 22,133 kg",
            "power": "162 kW",
            "capacity": "5.6 m³ blade"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_d65ex_18.jpg"
    },
    {
        "id": 18,
        "name": "Komatsu GD655-7 Motor Grader",
        "category": "Grader",
        "brand": "Komatsu",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "17,350 kg",
            "power": "218 HP",
            "width": "4 m"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_gd655_7.jpg"
    },
    {
        "id": 19,
        "name": "Komatsu HD785-8 Off-Highway Truck",
        "category": "Recovery",
        "brand": "Komatsu",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "166,080 kg",
            "payload": "91,700 kg",
            "capacity": "60.0 m³ volume"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_hd785_8.jpg"
    },
    {
        "id": 20,
        "name": "Komatsu PC220LC-12 Excavator",
        "category": "Excavator",
        "brand": "Komatsu",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "24,200 - 24,800 kg",
            "power": "129 kW",
            "depth": "6,620 mm"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_pc220lc_12.jpg"
    },
    {
        "id": 21,
        "name": "Komatsu PC390LC-11 Excavator",
        "category": "Excavator",
        "brand": "Komatsu",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "39,856 - 41,023 kg",
            "power": "192 kW",
            "depth": "7,380 mm"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_pc390lc_11.jpg"
    },
    {
        "id": 22,
        "name": "Komatsu PC390LC-11 MH (Crane)",
        "category": "Crane",
        "brand": "Komatsu",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "40,200 kg",
            "capacity": "45 Tons",
            "boom": "16.1 m reach"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_pc390lc_11_mh_crane.jpg"
    },
    {
        "id": 23,
        "name": "Komatsu PC88MR-11 Compact Excavator",
        "category": "Excavator",
        "brand": "Komatsu",
        "weightClass": "0-10 TONS",
        "specs": {
            "weight": "8,500 - 8,720 kg",
            "power": "51 kW",
            "depth": "4,610 mm"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_pc88mr_11.jpg"
    },
    {
        "id": 24,
        "name": "Komatsu WA270-8 Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Komatsu",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "12,795 - 13,190 kg",
            "power": "111 kW",
            "capacity": "1.9 - 2.7 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_wa270_8.jpg"
    },
    {
        "id": 25,
        "name": "Komatsu WA380-8 Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Komatsu",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "18,385 - 19,020 kg",
            "power": "143 kW",
            "capacity": "2.7 - 3.3 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_wa380_8.jpg"
    },
    {
        "id": 26,
        "name": "Komatsu WA600-8 Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Komatsu",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "55,400 - 57,501 kg",
            "power": "394 kW",
            "capacity": "6.4 - 7.8 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/komatsu_wa600_8.jpg"
    },
    {
        "id": 27,
        "name": "Volvo A40G Articulated Hauler",
        "category": "Recovery",
        "brand": "Volvo CE",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "30,100 kg",
            "payload": "39,000 kg",
            "capacity": "24 m³ volume"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_a40.jpg"
    },
    {
        "id": 28,
        "name": "Volvo A60 Articulated Hauler",
        "category": "Recovery",
        "brand": "Volvo CE",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "43,750 kg",
            "payload": "55,000 kg",
            "capacity": "33.6 m³ volume"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_a60.jpg"
    },
    {
        "id": 29,
        "name": "Volvo EC210 Excavator",
        "category": "Excavator",
        "brand": "Volvo CE",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "20,479 - 24,014 kg",
            "power": "115 kW",
            "depth": "6,730 mm"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_ec210.jpg"
    },
    {
        "id": 30,
        "name": "Volvo EC480D Crawler Excavator",
        "category": "Excavator",
        "brand": "Volvo CE",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "47,300 - 53,100 kg",
            "power": "265 kW",
            "depth": "9,170 mm"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_ec480d.jpg"
    },
    {
        "id": 31,
        "name": "Volvo EC950F Large Excavator",
        "category": "Excavator",
        "brand": "Volvo CE",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "91,275 - 94,810 kg",
            "power": "450 kW",
            "depth": "8,900 mm"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_ec950f.jpg"
    },
    {
        "id": 32,
        "name": "Volvo ECR88D Compact Excavator",
        "category": "Excavator",
        "brand": "Volvo CE",
        "weightClass": "0-10 TONS",
        "specs": {
            "weight": "8,620 - 9,980 kg",
            "power": "43 kW",
            "depth": "4,500 mm"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_ecr88d.jpg"
    },
    {
        "id": 33,
        "name": "Volvo L220 Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Volvo CE",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "31,200 - 33,100 kg",
            "power": "274 kW",
            "capacity": "4.3 - 16 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_l220.jpg"
    },
    {
        "id": 34,
        "name": "Volvo L350H Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Volvo CE",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "50,000 - 56,300 kg",
            "power": "397 kW",
            "capacity": "6.2 - 12.7 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_l350h.jpg"
    },
    {
        "id": 35,
        "name": "Volvo L90H Wheel Loader (Shovel)",
        "category": "Shovel",
        "brand": "Volvo CE",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "14,500 - 17,300 kg",
            "power": "137 kW",
            "capacity": "2.2 - 7 m³ bucket"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_l90h.jpg"
    },
    {
        "id": 36,
        "name": "Volvo R100E Rigid Hauler",
        "category": "Recovery",
        "brand": "Volvo CE",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "69,550 kg",
            "payload": "95,000 kg",
            "capacity": "60.4 m³ volume"
        },
        "status": "Available",
        "img": "/images/fleet/volvo_r100e.jpg"
    },
    {
        "id": 37,
        "name": "Hamm 3411 Soil Compactor (Roller)",
        "category": "Roller",
        "brand": "Hamm",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "11,310 kg",
            "power": "100 kW",
            "width": "2,140 mm drum"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyA3RPRWnfWAT5XXgvYSEIIjuwJTzfEHojmY_rUsPkA2ipVDb1cJl-nUVSGeMEH5hsqVrxS0Zys9WQXCn7XK1qY55mVI8Jslc54_YRf8cL2nwvzakwNLT6cImbi-bQJPNyo2BoUyoZPy8tOlUiUaUqM1pfnHwswNXmo0_CyYXFlKQrr0fpxRZ2Di3aSmpdxfM-QXhcDTrnAfX1nbZhRqeiIv29GPIkgSwtx0bnkb-5kN_h5Z89PZk6tZPwed9p-AcIroRaey44fw"
    },
    {
        "id": 38,
        "name": "Hamm H 25i Soil Compactor (Roller)",
        "category": "Roller",
        "brand": "Hamm",
        "weightClass": "25-50 TONS",
        "specs": {
            "weight": "25,300 kg",
            "power": "160 kW",
            "width": "2,220 mm drum"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyA3RPRWnfWAT5XXgvYSEIIjuwJTzfEHojmY_rUsPkA2ipVDb1cJl-nUVSGeMEH5hsqVrxS0Zys9WQXCn7XK1qY55mVI8Jslc54_YRf8cL2nwvzakwNLT6cImbi-bQJPNyo2BoUyoZPy8tOlUiUaUqM1pfnHwswNXmo0_CyYXFlKQrr0fpxRZ2Di3aSmpdxfM-QXhcDTrnAfX1nbZhRqeiIv29GPIkgSwtx0bnkb-5kN_h5Z89PZk6tZPwed9p-AcIroRaey44fw"
    },
    {
        "id": 39,
        "name": "JCB 3CX Backhoe Loader",
        "category": "Shovel",
        "brand": "JCB",
        "weightClass": "0-10 TONS",
        "specs": {
            "weight": "8,135 kg",
            "power": "55 kW",
            "capacity": "1.0 m³ shovel"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqTxSfoqmpVKoJL189VXeVEYUtlL2jcI1c_S5UdfnYiJax0yEy35rK3jvn9qqa_DhaHwkJSh4ne_2vI2dGdZo5inj2N7E4x9an18IQcfFlILm90b0ifdHX1U1zlyQAXBSHmyy63kFZRUS5_YJGPsridW4lBBaiw_PLnQKXiSouVKLCNtJ-mWEmXI-_jxj2RFr_7_7lZG5ds4tUoGm6ycjamnjn0PjvbcetcJ4uRq7hkK5VaRmmqRMyhl-QHtSKmXIoXn8sF3bt2w"
    },
    {
        "id": 40,
        "name": "JCB 540-170 Telehandler (Boom Loader)",
        "category": "Boom Loader",
        "brand": "JCB",
        "weightClass": "0-10 TONS",
        "specs": {
            "weight": "12,060 kg",
            "power": "81 kW",
            "height": "16.7 m lift"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqTxSfoqmpVKoJL189VXeVEYUtlL2jcI1c_S5UdfnYiJax0yEy35rK3jvn9qqa_DhaHwkJSh4ne_2vI2dGdZo5inj2N7E4x9an18IQcfFlILm90b0ifdHX1U1zlyQAXBSHmyy63kFZRUS5_YJGPsridW4lBBaiw_PLnQKXiSouVKLCNtJ-mWEmXI-_jxj2RFr_7_7lZG5ds4tUoGm6ycjamnjn0PjvbcetcJ4uRq7hkK5VaRmmqRMyhl-QHtSKmXIoXn8sF3bt2w"
    },
    {
        "id": 41,
        "name": "Liebherr LTM 1050 Mobile Crane",
        "category": "Crane",
        "brand": "Liebherr",
        "weightClass": "25-50 TONS",
        "specs": {
            "capacity": "50 Tons",
            "boom": "38 m telescopic",
            "weight": "36,000 kg"
        },
        "status": "Available",
        "img": "/images/fleet/liebherr_mobile_crane.jpg"
    },
    {
        "id": 42,
        "name": "Liebherr LTM 1100 Mobile Crane",
        "category": "Crane",
        "brand": "Liebherr",
        "weightClass": "50+ TONS",
        "specs": {
            "capacity": "100 Tons",
            "boom": "60 m telescopic",
            "weight": "48,000 kg"
        },
        "status": "Available",
        "img": "/images/fleet/liebherr_mobile_crane.jpg"
    },
    {
        "id": 43,
        "name": "Liebherr LTM 1250 Mobile Crane",
        "category": "Crane",
        "brand": "Liebherr",
        "weightClass": "50+ TONS",
        "specs": {
            "capacity": "250 Tons",
            "boom": "72 m telescopic",
            "weight": "60,000 kg"
        },
        "status": "Available",
        "img": "/images/fleet/liebherr_mobile_crane.jpg"
    },
    {
        "id": 44,
        "name": "Sany SSR120C-8 Roller",
        "category": "Roller",
        "brand": "Sany",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "12,000 kg",
            "power": "97 kW",
            "width": "2,130 mm drum"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6GpxFmAVSfrA9Uhd0t6z82VwUt7do-O1NjwXKxhsA9e7p582ntUY9PPpBBSa2kKivU-kGgLv1ggUiUVUBd8lUIG8jSoBwig0xYrL0ty-XVINq5DcYeJIbFqlA64LJe_rAiEqRTZ4SSWqAgkJpuPhhVSYCMmZC6zgH-RvtqDedqGWr7MFmC38-qJNnGrcBygMHElE7JTjQmhHPqwpdSUaBaiTKmRBMP7wYzj_X2rU9dn74s5-1mstiQYg1YxVMe0wY3pZkSOt3xg"
    },
    {
        "id": 45,
        "name": "Sany SY215C Excavator",
        "category": "Excavator",
        "brand": "Sany",
        "weightClass": "10-25 TONS",
        "specs": {
            "weight": "21,900 kg",
            "power": "118 kW",
            "depth": "6,600 mm"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCaIgJ9QMwWwWa-DUBkhDm8t93mvAWb7odqNMtNsSW7KT2EHI_BHWk7HoTj5Y4IEEXUfzmbzeZ2qjlbXgELOd1eEFlkdy86nBW51eCgJtn2u0kQOVEzDz9-NjlsgAwO1AaUZT-xVdoc3R94n2-LqXYzj8iJgOM-nzX0DOT5H5ICZDQuzCMklIJjupcmZElaa3evEJgNe6691NUDzhqYnXUezdTXAc64Q1UMKcAE480tBlBlRlyB4WtmuYf9_siZNEL2qmWyd-ZnZA"
    },
    {
        "id": 46,
        "name": "Sany SY500H Large Excavator",
        "category": "Excavator",
        "brand": "Sany",
        "weightClass": "50+ TONS",
        "specs": {
            "weight": "52,500 kg",
            "power": "300 kW",
            "depth": "7,700 mm"
        },
        "status": "Available",
        "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH2BNfC2bcoYQQaQBvJ9x5hA-h_QMmLAA5evCnY_JX4CgeGkuZMCsiWcSeYnnbnT3Jrj22prT6HsiHEti-xsWpNm_EQ-V4dGab2xk7nESeTGiqRy0kefUYkS8085nYksDUEZWQLI09z0910HqJh38oGK9vxanewSdEEHMgg3KRwZzLnipbAH--5ooMTMmBe8DOFkdpDkrqKYicntcAVB-0-cRsWnUTqDS-2xJ9Vw1Ec7M98DxcfYGJl1oRuRp50YlAHsnHOZXEQ"
    }
];

export default function Fleet() {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Eye icon modal state
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  // Consume category filter from navigation state
  useEffect(() => {
    if (location.state && location.state.filterCategory) {
      setSelectedCategories([location.state.filterCategory]);
      setSelectedWeights([]);
      setSelectedBrands([]);
      setSearch('');
      setCurrentPage(1);
      // Scroll to the top of the viewport
      window.scrollTo(0, 0);
      // Clear state once applied
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.state, location.pathname, navigate]);

  const categories = ["Excavator", "Roller", "Grader", "Shovel", "Boom Loader", "Recovery", "Bulldozer", "Crane"];
  const weightClasses = ["0-10 TONS", "10-25 TONS", "25-50 TONS", "50+ TONS"];
  const brands = ["Caterpillar", "Komatsu", "Volvo CE", "Hamm", "Sany", "Liebherr", "JCB"];

  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleWeightChange = (wt) => {
    setSelectedWeights(prev => 
      prev.includes(wt) ? prev.filter(w => w !== wt) : [...prev, wt]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedWeights([]);
    setSelectedBrands([]);
    setSearch('');
  };

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategories, selectedWeights, selectedBrands]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Lock scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProductForModal(null);
      }
    };
    if (selectedProductForModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProductForModal]);

  const filteredFleet = useMemo(() => {
    return fleetItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.brand.toLowerCase().includes(search.toLowerCase()) ||
                            item.category.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchesWeight = selectedWeights.length === 0 || selectedWeights.includes(item.weightClass);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

      return matchesSearch && matchesCategory && matchesWeight && matchesBrand;
    });
  }, [search, selectedCategories, selectedWeights, selectedBrands]);

  // Paginated items
  const paginatedFleet = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredFleet.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFleet, currentPage]);

  // Total pages
  const totalPages = useMemo(() => {
    return Math.ceil(filteredFleet.length / itemsPerPage);
  }, [filteredFleet.length]);

  return (
    <div>
      
      {/* Header Section */}
      <header className="pt-8 pb-12 bg-surface px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-lg">
          <div>
            <span className="font-label-bold text-primary uppercase tracking-widest block mb-2 text-sm font-semibold">Fleet Solutions</span>
            <h1 className="font-display-xl text-3xl sm:text-5xl uppercase font-black text-on-background">Heavy Equipment Catalog</h1>
          </div>
          <div className="flex items-center gap-4 border border-outline px-4 py-2 bg-white w-full md:w-auto max-w-md">
            <span className="material-symbols-outlined text-primary">search</span>
            <input 
              className="border-none focus:ring-0 font-body-md w-full md:w-64 bg-transparent" 
              placeholder="Search machinery, specs, or brands..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap flex flex-col lg:flex-row gap-gutter">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-stack-lg">
          
          {/* Category Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Equipment Type</h3>
            <div className="space-y-3 pr-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="sr-only" 
                  />
                  <div className={`w-5 h-5 border flex items-center justify-center transition-all ${selectedCategories.includes(cat) ? 'border-primary bg-primary text-white' : 'border-outline bg-white group-hover:border-primary'}`}>
                    {selectedCategories.includes(cat) && (
                      <span className="material-symbols-outlined text-sm font-black select-none" style={{ fontSize: '14px' }}>check</span>
                    )}
                  </div>
                  <span className={`font-label-bold text-sm uppercase group-hover:text-primary transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : ''}`}>
                    {cat === 'Recovery' ? 'Recovery' : `${cat}s`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Weight Class Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Operating Weight</h3>
            <div className="space-y-2">
              {weightClasses.map((wt) => (
                <button 
                  key={wt} 
                  onClick={() => handleWeightChange(wt)}
                  className={`w-full text-left p-2 border font-label-bold text-xs uppercase transition-all ${selectedWeights.includes(wt) ? 'border-primary bg-primary text-on-primary font-bold' : 'border-outline-variant bg-surface hover:bg-primary-fixed-dim'}`}
                >
                  {wt}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Filter */}
          <div className="border border-outline-variant bg-white p-6">
            <h3 className="font-headline-sm text-lg uppercase mb-stack-md border-b-2 border-primary pb-2 font-bold">Top Brands</h3>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((brand) => (
                <div 
                  key={brand} 
                  onClick={() => handleBrandChange(brand)}
                  className={`border p-2 flex items-center justify-center cursor-pointer transition-all ${selectedBrands.includes(brand) ? 'border-primary bg-primary/10 font-bold text-primary' : 'border-outline-variant grayscale hover:grayscale-0'}`}
                >
                  <span className="font-bold text-[10px] uppercase text-center">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <button 
            onClick={clearFilters}
            className="w-full py-3 bg-on-surface text-white font-label-bold text-sm uppercase hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Filters
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-grow">
          {/* Results Bar */}
          <div className="flex justify-between items-center mb-stack-lg">
            <p className="font-body-md text-on-surface-variant text-sm">
              Showing <span className="font-bold text-on-surface">{filteredFleet.length}</span> units available for rent
            </p>
          </div>

          {/* Grid */}
          {filteredFleet.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-outline-variant bg-white">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
              <p className="font-label-bold text-lg uppercase">No Equipment Found</p>
              <p className="text-secondary text-sm mt-2">Try clearing your filters or widening your search term.</p>
              <button 
                onClick={clearFilters}
                className="mt-6 px-6 py-2 bg-primary text-on-primary font-label-bold uppercase text-xs hover:bg-on-surface transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                {paginatedFleet.map((item) => (
                  <div key={item.id} className="equipment-card bg-white border border-outline-variant flex flex-col transition-all duration-300">
                    <div className="relative h-56 overflow-hidden group">
                      <img 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        src={item.img} 
                        alt={item.name} 
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 font-label-bold text-xs uppercase ${item.status === 'Ready to Ship' ? 'bg-primary text-on-primary' : item.status === 'Reserved' ? 'bg-error text-white' : 'bg-on-surface text-white'}`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-primary font-label-bold text-xs uppercase tracking-wider">{item.brand}</span>
                        <h4 className="font-headline-sm text-xl uppercase mt-1 mb-4 font-semibold text-on-surface">{item.name}</h4>
                        
                        <div className="space-y-2 border-t border-b border-surface-container py-4 mb-6 text-sm">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="font-label-sm text-on-surface-variant uppercase text-xs">{key}</span>
                              <span className="font-label-bold text-on-surface font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link 
                          to="/contact" 
                          state={{ selectedEquipment: item.name }}
                          className="btn-quote flex-grow text-center py-3 bg-primary text-on-primary font-label-bold text-sm uppercase tracking-wide transition-all"
                        >
                          Request Quote
                        </Link>
                        <button 
                          onClick={() => setSelectedProductForModal(item)}
                          className="p-3 border-2 border-on-surface hover:bg-on-surface hover:text-white transition-all flex items-center justify-center cursor-pointer"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12 border-t border-outline-variant pt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-outline-variant text-sm font-label-bold uppercase transition-all disabled:opacity-40 disabled:hover:bg-transparent hover:bg-primary hover:text-on-primary cursor-pointer disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 border text-sm font-label-bold transition-all cursor-pointer ${currentPage === pageNum ? 'border-primary bg-primary text-on-primary font-bold' : 'border-outline-variant hover:bg-primary-fixed-dim'}`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-outline-variant text-sm font-label-bold uppercase transition-all disabled:opacity-40 disabled:hover:bg-transparent hover:bg-primary hover:text-on-primary cursor-pointer disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Equipment Details Premium Modal */}
      {selectedProductForModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm transition-all"
          onClick={() => setSelectedProductForModal(null)}
        >
          <div 
            className="bg-[#1c1c1c] text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-outline-variant flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-20 cursor-pointer w-10 h-10 flex items-center justify-center bg-black/40 rounded-full"
              title="Close modal"
            >
              <span className="material-symbols-outlined font-bold text-2xl">close</span>
            </button>

            {/* Left Column: Image and Status */}
            <div className="w-full md:w-1/2 relative bg-[#121212] flex items-center justify-center">
              <img 
                className="w-full h-full object-cover min-h-[250px] md:min-h-[450px]" 
                src={selectedProductForModal.img} 
                alt={selectedProductForModal.name} 
              />
              <div className={`absolute top-4 left-4 px-3 py-1 font-label-bold text-xs uppercase ${selectedProductForModal.status === 'Ready to Ship' ? 'bg-[#f5c200] text-[#1a1c1c]' : selectedProductForModal.status === 'Reserved' ? 'bg-error text-white' : 'bg-white text-black'}`}>
                {selectedProductForModal.status}
              </div>
            </div>

            {/* Right Column: Details & Inquiry Options */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[#f5c200] font-label-bold text-xs uppercase tracking-wider font-semibold block mb-1">{selectedProductForModal.brand}</span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase font-black tracking-tight text-white mb-4 border-b border-white/10 pb-2">
                  {selectedProductForModal.name}
                </h2>

                <div className="space-y-3 mb-4">
                  <h3 className="font-label-bold text-xs uppercase text-white/50 tracking-wider">Specifications</h3>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="font-label-sm text-white/60 uppercase text-xs">Category</span>
                      <span className="font-label-bold text-white font-semibold uppercase">{selectedProductForModal.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="font-label-sm text-white/60 uppercase text-xs">Operating Weight Class</span>
                      <span className="font-label-bold text-[#f5c200] font-semibold">{selectedProductForModal.weightClass}</span>
                    </div>
                    {Object.entries(selectedProductForModal.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1.5 border-b border-white/5">
                        <span className="font-label-sm text-white/60 uppercase text-xs">{key}</span>
                        <span className="font-label-bold text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Link 
                  to="/contact" 
                  state={{ selectedEquipment: selectedProductForModal.name }}
                  onClick={() => setSelectedProductForModal(null)}
                  className="w-full text-center py-2.5 bg-[#f5c200] text-[#1a1c1c] hover:bg-white hover:text-black font-label-bold text-xs uppercase tracking-wider transition-all block font-bold"
                >
                  Request Standard Quote
                </Link>
                <a 
                  href={`https://wa.me/971566649012?text=${encodeURIComponent(`Hi British Transport LLC, I am interested in renting the ${selectedProductForModal.name}. Please provide availability and quote details.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 bg-[#25D366] text-white hover:bg-[#20ba59] font-label-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.308.158.386.541 1.32.588 1.416.046.096.077.208.014.335-.062.126-.093.204-.185.311-.092.106-.194.238-.277.319-.092.091-.188.19-.081.374.107.184.477.787 1.023 1.274.704.628 1.297.823 1.481.917.184.093.293.078.403-.047.11-.125.474-.551.6-.74.126-.188.252-.157.426-.092.173.065 1.102.52 1.291.614s.314.142.359.221c.045.079.045.459-.1.864z"></path>
                  </svg>
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
