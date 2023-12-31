

import classes from "./Drawing.module.css"
function colorRandomize(){

    let number = Math.floor(Math.random() * 20)

       return number < 10? "white": "black"
}



function Background(){

    return (

        <div> 
        <PinchedPin className={classes.pinched}/>

        <OpenPin className={classes.open} />

        <ScribbleStar style={{
            position: "absolute",
            top: "70%",
            left: "12%",
        }} height="233" width="233" />

        <Plus style={{
            position: "absolute",
            top: "65%",
            left: "25%"
        }} height="233" width="233" />

   
        <Plus
            style={{
                position: "absolute",
                top: "10%",
                left: "1%",
            }} />

        

        <Crown className = {classes.crown}/>

        </div>
    )

    
}


function BackgroundCondensed(){

    return (

        <div className={classes.background}> 
       

       
      

        <ScribbleStar style={{
            position: "absolute",
            top: "12%",
            left: "1%"
        }} height="233" width="233" />



        <Plus style={{
            position: "absolute",
            top: "62%",
            left: "74%",
        }} height="342" width="342" />

        <ScribbleStar style={{
            position: "absolute",
            top: "25%",
            left: "20%",
        }} height="243" width="243" />

        <Plus
            style={{
                position: "absolute",
                top: "80%",
                left: "64%",
            }} />

        <Plus
            style={{
                position: "absolute",
                top: "6%",
                left: "60%",
            }} />

        </div>

    )

    
}


function PinchedPin(props){
    
   
    return(


        
        <svg className = {props.className} 

            version="1.0" xmlns="http://www.w3.org/2000/svg"width="100" height="100" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet" stroke-width="4">
            <g transform="translate(0.000000,216.000000) scale(0.100000,-0.100000)" fill= {colorRandomize()} stroke="black" >
                <path d="M1117 1349 l5 -36 -143 -6 c-285 -14 -468 -62 -541 -144 -33 -36 -49
                -92 -42 -140 18 -118 151 -181 467 -220 175 -21 743 -24 1000 -4 132 10 171
                10 183 1 16 -14 161 -8 304 11 175 24 253 100 253 245 1 115 -59 198 -173 240
                -52 19 -305 34 -360 21 -32 -7 -330 -10 -338 -3 -1 2 2 15 7 30 14 36 -4 33
                -19 -4 -15 -36 -9 -135 9 -153 11 -10 12 -4 6 31 l-7 42 141 0 c128 0 141 -2
                141 -17 0 -10 9 -36 19 -59 27 -60 74 -76 216 -74 147 3 142 3 161 -25 19 -29
                11 -60 -21 -81 -34 -22 -68 -9 -124 47 -50 50 -75 59 -104 37 -29 -23 -137
                -182 -137 -204 0 -19 -7 -22 -87 -28 -200 -15 -598 -26 -743 -21 -265 10 -550
                43 -574 66 -6 6 -4 9 6 9 28 0 85 63 97 105 18 68 -8 143 -62 175 -22 13 -27
                21 -16 24 34 12 234 36 353 42 l129 7 -6 -44 -6 -44 20 43 c22 47 19 115 -7
                149 -12 16 -12 14 -7 -18z m1140 -78 c214 -16 296 -76 297 -217 0 -95 -50
                -159 -143 -184 -46 -12 -332 -40 -343 -34 -20 13 -4 62 43 129 73 106 72 106
                122 57 49 -48 107 -75 142 -66 38 9 75 59 75 101 0 25 -8 43 -29 64 l-29 29
                -134 0 c-86 0 -142 5 -158 13 -32 16 -58 81 -40 102 14 17 30 18 197 6z
                m-1612 -125 c72 -73 23 -193 -84 -204 -46 -4 -53 -2 -81 26 -26 26 -30 38 -30
                83 0 46 4 55 36 85 30 29 42 34 85 34 39 0 55 -5 74 -24z"/>
            </g>
        </svg>

    )
}


function OpenPin(props){


  

    return(


     
        <svg className = {props.className} 
         version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100" height="100" viewBox="0 0 300.000000 300.000000"
        preserveAspectRatio="xMidYMid meet"strokeWidth="3">
       
            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
            fill= {colorRandomize()} stroke="black">
                <path d="M1479 2656 c-45 -34 -167 -170 -256 -286 -81 -106 -421 -641 -568
                -895 -154 -266 -388 -743 -415 -845 -33 -123 36 -240 170 -291 73 -28 135 -21
                247 27 85 37 441 236 668 374 61 36 216 131 345 209 129 79 242 149 250 156 8
                7 53 36 100 65 47 29 120 79 163 111 43 33 85 59 94 59 8 0 38 19 66 43 62 52
                186 146 279 211 117 81 158 159 158 299 0 72 -4 88 -30 133 -34 59 -93 114
                -159 146 -35 17 -63 22 -116 22 -76 -1 -99 -10 -223 -86 -37 -23 -116 -68
                -177 -101 -145 -79 -165 -94 -165 -121 0 -26 40 -70 84 -93 28 -15 110 -20
                145 -8 10 3 49 40 86 82 51 56 84 83 129 104 72 34 109 36 154 9 123 -75 80
                -270 -60 -270 -39 0 -117 35 -178 79 -51 37 -73 39 -94 9 -21 -30 -20 -54 9
                -178 38 -161 39 -157 -52 -222 -280 -200 -671 -446 -1093 -687 l-265 -152 -7
                61 c-16 144 -114 239 -246 240 l-52 0 59 117 c145 290 333 617 620 1076 62
                100 138 222 169 272 31 49 93 143 139 209 105 151 112 191 22 122z m-71 -163
                c-58 -87 -147 -225 -198 -308 -51 -82 -114 -184 -140 -225 -262 -417 -533
                -906 -653 -1180 -63 -143 -78 -193 -71 -229 l4 -26 -10 24 c-20 46 13 136 149
                411 50 101 91 185 91 187 0 2 -5 1 -11 -3 -8 -4 -7 0 1 15 6 12 15 19 20 16 5
                -3 25 25 44 62 31 63 98 179 268 468 64 109 313 509 422 678 44 69 54 91 47
                105 -6 9 -11 13 -12 7 -1 -5 -2 -14 -4 -20 -1 -5 -3 -16 -3 -22 -1 -7 -7 -13
                -14 -13 -9 0 -9 3 0 12 7 7 12 16 12 22 0 5 -6 1 -14 -9 -8 -11 -12 -23 -9
                -28 2 -4 -7 -24 -22 -43 -15 -19 -28 -42 -29 -49 -1 -8 -6 -18 -11 -22 -4 -4
                -5 -1 -1 7 12 23 -29 -30 -49 -63 -13 -22 -14 -28 -4 -23 8 4 5 0 -6 -9 -11
                -9 -21 -20 -21 -25 -1 -6 -2 -14 -3 -18 0 -5 -9 -17 -19 -28 -35 -38 -63 -84
                -57 -93 3 -5 0 -13 -6 -17 -8 -5 -10 -2 -5 7 4 8 0 5 -8 -6 -9 -11 -14 -25
                -12 -32 3 -7 1 -12 -5 -10 -5 1 -35 -42 -67 -95 -31 -53 -101 -170 -155 -258
                -53 -89 -94 -167 -91 -172 4 -7 2 -8 -4 -4 -14 8 -35 -30 -26 -47 4 -6 4 -9
                -1 -5 -10 10 -116 -182 -108 -195 3 -6 1 -7 -4 -4 -13 8 -26 -20 -16 -35 3 -6
                1 -8 -5 -5 -13 9 -95 -139 -86 -155 4 -6 3 -8 -3 -5 -12 7 -98 -168 -96 -195
                1 -10 -2 -16 -7 -13 -10 6 -80 -174 -87 -227 -3 -22 -2 -43 3 -47 5 -3 18 -23
                28 -44 11 -20 21 -35 23 -33 3 2 -1 15 -7 28 -11 22 -11 22 9 -2 11 -13 19
                -29 18 -35 -3 -14 83 -55 113 -54 24 1 24 2 -5 10 -23 6 -17 7 27 5 50 -2 62
                1 90 25 18 14 33 35 33 45 0 11 5 18 12 17 18 -4 34 69 27 119 -4 24 -15 57
                -25 74 -27 44 -96 88 -142 88 -20 1 -37 4 -37 9 0 4 0 12 0 19 0 6 3 9 6 6 3
                -4 19 -2 36 3 35 9 88 1 68 -11 -8 -5 -5 -9 9 -13 12 -3 19 -1 15 4 -3 5 0 9
                6 9 6 0 34 -23 61 -50 39 -40 49 -55 44 -71 -5 -15 -4 -19 4 -15 14 9 14 -4 1
                -24 -8 -12 -10 -12 -10 -1 0 8 -2 12 -3 10 -2 -2 -1 -33 3 -69 6 -51 4 -74
                -10 -106 -10 -23 -23 -45 -29 -49 -7 -3 -3 8 9 27 32 53 23 57 -10 4 -30 -47
                -88 -84 -135 -86 -20 -1 -20 -1 0 -10 14 -6 2 -9 -40 -9 -38 0 -53 3 -40 8 16
                7 14 9 -15 16 -19 4 -39 7 -44 6 -19 -4 -78 53 -106 102 -16 29 -30 46 -30 39
                0 -20 46 -105 66 -124 33 -29 127 -68 166 -68 55 0 129 28 167 63 40 38 75
                110 68 140 -3 12 -2 42 3 67 7 42 8 39 9 -30 1 -91 -20 -142 -75 -189 -122
                -101 -325 -64 -395 71 -28 54 -26 152 4 226 43 103 110 242 115 237 6 -5 31
                40 146 260 38 72 64 126 58 120 -5 -5 -53 -91 -106 -190 -92 -173 -130 -232
                -65 -102 77 153 172 316 182 310 6 -3 7 -1 3 6 -5 7 17 55 50 114 74 132 254
                427 260 427 7 0 -9 -28 -75 -133 -73 -118 -214 -367 -209 -372 2 -2 45 69 95
                158 50 89 116 202 147 252 31 49 54 95 52 102 -3 7 0 15 6 19 7 4 8 3 4 -4 -4
                -7 -5 -12 -2 -12 3 0 10 10 17 21 9 17 8 20 -2 14 -14 -9 -14 -10 40 75 81
                129 199 302 270 395 79 104 230 269 239 260 3 -3 -42 -76 -100 -162z m1072
                -324 c-18 -6 -13 -7 21 -3 49 5 103 -12 92 -29 -4 -6 0 -8 10 -4 9 3 19 1 23
                -5 5 -7 2 -8 -6 -3 -9 6 -11 4 -6 -4 5 -7 14 -10 22 -7 20 8 102 -89 115 -137
                27 -101 4 -228 -54 -294 -40 -45 -417 -326 -426 -317 -3 4 -1 9 5 11 6 2 78
                53 160 113 262 193 299 235 311 362 6 70 -16 166 -43 189 -9 7 -6 -6 7 -36 11
                -26 19 -56 16 -66 -3 -10 -2 -17 3 -14 4 3 7 -13 6 -34 0 -21 -4 -37 -7 -35
                -6 3 -20 -47 -24 -86 -3 -27 -105 -117 -258 -226 -81 -58 -145 -109 -142 -114
                3 -5 0 -12 -6 -16 -8 -5 -9 -3 -4 6 5 8 3 11 -6 8 -8 -3 -13 -11 -11 -17 1 -6
                -4 -11 -11 -11 -19 0 -35 37 -42 100 -4 30 -16 92 -26 138 -21 92 -23 130 -9
                152 8 13 14 13 42 -4 172 -100 228 -115 288 -73 58 39 75 71 75 140 0 50 -5
                68 -24 95 -28 36 -94 72 -133 72 -53 0 -143 -58 -225 -145 -78 -83 -81 -85
                -126 -85 -25 0 -58 5 -74 11 -31 12 -83 57 -83 73 0 6 7 0 16 -13 22 -30 89
                -61 137 -61 35 0 46 8 127 88 100 101 169 142 239 142 73 0 141 -55 169 -135
                9 -26 11 -27 11 -7 1 28 27 39 53 23 15 -9 20 -9 24 3 21 54 -80 197 -128 181
                -13 -4 -57 -10 -99 -14 -62 -6 -86 -13 -126 -39 -27 -18 -56 -32 -64 -32 -8 1
                -1 8 14 16 16 9 27 18 24 21 -3 2 -17 -3 -32 -13 -26 -17 -29 -17 -57 -1 -23
                13 -35 14 -51 6 -22 -10 -22 -10 -2 6 11 9 34 23 50 31 l30 15 -25 -20 c-33
                -27 -21 -27 25 0 19 12 42 19 50 16 9 -4 12 -1 9 7 -3 8 10 17 35 26 34 11 42
                10 62 -4 13 -9 28 -16 34 -16 5 0 -3 9 -20 20 l-29 19 24 10 c18 7 20 10 8 10
                -10 1 -40 -8 -68 -18 -56 -21 -65 -19 -20 4 34 18 94 33 130 33 l25 0 -25 -9z
                m145 -145 c25 -27 34 -64 16 -64 -11 0 -81 71 -81 83 0 17 43 5 65 -19z m-465
                1 c0 -3 -32 -21 -70 -40 -39 -20 -68 -40 -65 -45 3 -6 -1 -7 -9 -4 -23 9 -20
                -3 4 -16 11 -6 20 -7 19 -3 -4 23 2 35 17 29 8 -3 12 -2 9 4 -7 11 39 25 54
                15 7 -3 8 0 5 9 -9 23 77 63 106 50 20 -9 12 -15 -69 -67 -91 -57 -107 -65
                -96 -48 3 5 1 12 -4 15 -5 4 -8 -2 -7 -11 3 -21 -60 -64 -81 -56 -20 8 6 35
                26 28 13 -4 13 -3 -1 8 -13 11 -15 16 -6 25 15 15 3 15 -25 1 -13 -7 -18 -7
                -12 -1 8 8 195 111 203 112 1 0 2 -2 2 -5z m73 -58 c-86 -77 -110 -95 -150
                -116 -67 -34 -82 -24 -21 13 31 18 89 59 129 90 77 61 105 70 42 13z m426
                -283 c-32 -34 -349 -268 -337 -248 4 5 64 51 135 102 70 50 148 110 173 131
                52 46 64 52 29 15z m-430 -272 c11 -21 8 -24 -123 -114 -38 -26 -64 -48 -56
                -48 20 0 6 -10 -20 -15 -31 -6 -181 -105 -175 -115 3 -5 0 -12 -6 -16 -8 -4
                -9 -3 -5 4 11 18 -1 14 -44 -14 -22 -15 -37 -31 -33 -37 3 -6 1 -7 -5 -3 -14
                8 -55 -17 -45 -27 6 -7 -10 -11 -33 -8 -15 2 -146 -84 -139 -91 4 -3 -2 -5
                -12 -4 -10 0 -17 -5 -15 -12 1 -8 -2 -11 -7 -8 -13 8 -180 -93 -192 -116 -6
                -11 -17 -17 -24 -14 -13 4 -125 -50 -125 -61 0 -2 26 9 57 26 31 17 58 29 60
                27 2 -2 -29 -20 -68 -41 -40 -21 -68 -32 -64 -25 6 9 3 9 -14 1 -11 -7 -21
                -17 -21 -23 0 -6 -3 -9 -6 -5 -3 3 -15 -3 -26 -13 -11 -10 -27 -16 -36 -13
                -10 4 -13 2 -8 -5 5 -8 1 -10 -10 -5 -13 5 -15 3 -9 -7 5 -9 4 -11 -3 -6 -11
                6 -72 -19 -72 -30 0 -2 14 2 30 11 17 9 30 13 30 11 0 -11 -55 -33 -69 -28 -9
                3 -11 0 -6 -8 5 -9 4 -11 -4 -6 -10 7 -101 -38 -101 -50 0 -3 20 7 45 22 25
                14 45 24 45 21 0 -9 -91 -59 -97 -53 -3 3 -14 1 -23 -4 -15 -8 -17 -6 -13 8 2
                10 32 33 66 51 34 19 70 43 80 55 10 12 16 15 12 9 -4 -9 -1 -11 9 -7 9 3 13
                10 10 15 -3 5 3 6 12 2 12 -4 15 -3 10 5 -5 8 -1 10 10 5 12 -4 15 -3 10 5 -4
                7 -2 10 6 7 8 -3 22 2 33 10 19 16 19 16 -2 5 -35 -16 -27 -3 8 16 18 9 28 11
                24 4 -4 -7 6 -5 24 4 35 19 43 32 9 16 -21 -10 -22 -10 -5 4 11 8 26 12 35 9
                11 -5 13 -3 7 7 -5 9 -4 11 3 6 11 -6 72 19 72 30 0 2 -13 -2 -30 -11 -16 -9
                -30 -13 -30 -11 0 9 57 35 63 30 6 -6 117 53 117 62 0 3 -10 0 -22 -6 -21 -10
                -22 -10 -5 4 11 8 25 12 32 10 7 -3 16 0 21 7 5 8 3 10 -6 4 -8 -5 -11 -4 -6
                3 4 6 14 8 23 5 12 -5 14 -3 8 7 -5 8 -4 11 2 7 6 -4 23 5 37 18 15 14 32 25
                38 25 13 0 148 79 148 87 0 2 -5 1 -12 -3 -7 -4 -8 -3 -4 4 4 6 14 8 23 5 11
                -4 14 -3 9 5 -4 8 -2 10 7 6 8 -3 18 0 23 7 5 8 3 10 -6 4 -8 -5 -11 -4 -6 3
                4 6 13 9 20 6 8 -3 17 0 22 7 5 8 3 10 -6 4 -9 -5 -11 -4 -6 4 4 6 12 9 17 5
                9 -5 209 113 209 124 0 4 -45 -21 -93 -53 -15 -9 -27 -15 -27 -12 0 9 152 101
                170 102 17 1 196 120 206 137 3 5 -36 -19 -87 -55 -98 -66 -132 -87 -114 -70
                27 27 201 139 211 136 6 -2 19 7 30 19 l19 23 -25 -20 -25 -20 19 23 c23 27
                32 28 45 4z m26 -52 c-19 -31 -585 -405 -585 -386 0 2 27 21 60 41 33 20 59
                41 57 46 -1 6 9 18 23 26 l25 15 -25 -21 c-37 -31 -14 -25 42 10 47 31 62 47
                33 35 -31 -11 -13 4 53 47 88 57 92 59 92 54 0 -3 -23 -19 -50 -37 -28 -18
                -48 -35 -45 -38 6 -7 177 109 255 172 53 43 78 57 65 36z m-1794 -426 c-16
                -33 -30 -56 -31 -52 0 11 53 118 58 114 2 -2 -10 -30 -27 -62z m1179 22 c0 -3
                -71 -49 -210 -134 -14 -9 -20 -11 -15 -5 9 10 216 143 223 143 1 0 2 -2 2 -4z
                m-170 -80 c0 -6 -128 -86 -137 -86 -7 0 127 89 135 90 1 0 2 -2 2 -4z m-115
                -102 c-27 -21 -492 -286 -530 -302 -70 -31 8 17 265 163 151 85 277 154 280
                154 3 0 -4 -6 -15 -15z m-716 -69 c17 -20 31 -46 30 -58 -1 -17 -3 -15 -10 10
                -5 17 -28 48 -52 69 -23 20 -32 32 -21 26 12 -6 35 -27 53 -47z m-48 12 c41
                -28 59 -60 59 -109 0 -73 -44 -138 -107 -159 -68 -22 -168 41 -179 112 -4 22
                2 54 16 92 18 47 29 62 54 73 49 21 118 18 157 -9z"/>
                <path d="M1422 2562 c-30 -35 -48 -63 -43 -70 5 -8 21 8 47 46 73 103 71 111
                -4 24z"/>
                <path d="M1085 2116 c-52 -80 -95 -148 -95 -153 0 -6 144 206 196 290 3 4 3 7
                0 7 -3 0 -48 -65 -101 -144z"/>
                <path d="M648 782 c7 -5 21 -24 31 -42 17 -32 41 -51 41 -33 0 14 -61 83 -73
                83 -8 0 -8 -3 1 -8z"/>
                <path d="M300 713 c-12 -32 -24 -76 -26 -98 l-3 -40 8 40 c5 22 19 64 30 94
                12 29 20 56 17 58 -2 2 -14 -22 -26 -54z"/>
                <path d="M2480 2115 c-11 -13 -7 -15 28 -15 46 0 64 15 29 24 -34 9 -43 7 -57
                -9z"/>
                <path d="M2668 1846 c-26 -37 -37 -38 -39 -2 0 12 -7 0 -15 -25 -20 -66 -84
                -132 -240 -250 -74 -56 -134 -106 -134 -112 0 -13 37 12 180 123 135 105 237
                205 264 258 24 47 13 51 -16 8z"/>
                <path d="M2196 1783 c-3 -4 -6 -17 -6 -30 0 -20 3 -23 27 -17 15 4 33 7 40 7
                7 0 13 3 13 7 0 10 -67 40 -74 33z"/>
                <path d="M2242 1723 c-31 -11 -42 -19 -38 -30 3 -8 6 -19 6 -24 0 -4 7 -6 15
                -3 8 4 12 11 8 17 -4 6 0 8 10 4 10 -3 17 -3 17 2 0 10 51 34 57 27 11 -10 -8
                -56 -22 -56 -8 0 -15 -4 -15 -8 0 -4 -10 -8 -22 -9 -23 -2 -23 -2 2 18 l25 21
                -31 -18 c-22 -12 -31 -23 -29 -38 8 -67 17 -126 21 -126 2 0 45 33 96 73 52
                39 105 80 118 89 l25 17 -45 1 c-31 0 -60 10 -95 30 -27 16 -52 29 -55 29 -3
                0 -24 -7 -48 -16z m128 -72 c0 -5 -19 -23 -42 -40 -31 -23 -45 -28 -52 -20 -8
                8 -7 13 2 16 7 3 25 16 40 29 28 24 52 31 52 15z"/>
            </g>
       </svg>
    
    )
}



function Lightening(props){

   

    return(
       
        <svg className = {props.className}  
        version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="500" height="500" viewBox="0 0 1920.000000 1920.000000"
            preserveAspectRatio="xMidYMid meet">
        
                <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
                fill={colorRandomize()} stroke="black">
                <path d="M10483 17457 c-106 -281 -292 -775 -413 -1097 -121 -322 -222 -592
                -225 -600 -6 -14 -23 14 -486 799 -189 322 -245 409 -251 395 -4 -11 -66 -280
                -137 -599 -72 -319 -218 -969 -325 -1445 -423 -1880 -497 -2213 -493 -2216 2
                -2 60 128 129 289 69 160 289 670 488 1132 199 462 398 924 443 1028 44 103
                83 187 86 187 3 0 22 -28 42 -63 52 -89 459 -781 540 -916 l68 -115 31 70 c17
                38 306 697 642 1464 336 767 659 1505 718 1640 72 164 104 247 96 251 -14 9
                -751 309 -757 309 -2 0 -91 -231 -196 -513z"/>
                </g>
        </svg>
         
    )

}


function Plus(props){


    return(
        
    <svg style = {props.style}  
    version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100" height="100" viewBox="0 0 1920.000000 1920.000000"
        preserveAspectRatio="xMidYMid meet">
       
            <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
            fill= {colorRandomize()} stroke="black">
            <path d="M15565 17404 c-55 -20 -75 -47 -75 -100 0 -36 -3 -44 -18 -44 -32 0
            -61 -29 -67 -68 -17 -100 -18 -101 -31 -22 -10 54 -19 80 -35 93 -30 24 -66
            21 -94 -8 -24 -23 -25 -31 -25 -135 0 -60 -3 -110 -6 -110 -3 0 -14 5 -25 10
            -15 9 -19 22 -19 68 0 105 -24 152 -79 152 -40 0 -69 -40 -85 -120 -45 -227
            -92 -774 -97 -1125 -1 -60 -4 -121 -7 -134 l-5 -24 -201 7 c-111 3 -299 11
            -418 17 -243 12 -316 6 -399 -36 -82 -42 -104 -104 -51 -145 26 -21 34 -22
            190 -18 89 2 159 1 155 -3 -5 -3 -47 -11 -95 -17 -188 -24 -340 -55 -373 -77
            -27 -19 -52 -23 -170 -30 -126 -7 -140 -9 -162 -31 -26 -26 -29 -52 -9 -109
            18 -51 49 -75 97 -75 29 0 41 -5 45 -17 16 -52 41 -68 119 -79 l50 -7 -74 -13
            c-40 -7 -82 -21 -92 -30 -27 -24 -25 -75 4 -102 21 -20 34 -22 135 -22 62 0
            112 -3 112 -7 -2 -29 -29 -40 -109 -45 -72 -4 -87 -8 -103 -28 -23 -29 -23
            -75 1 -99 22 -22 78 -35 261 -61 240 -34 477 -51 1003 -74 48 -2 90 -5 92 -7
            2 -2 8 -85 14 -184 15 -247 39 -480 61 -605 25 -135 33 -143 135 -134 l73 7 4
            -154 c4 -160 11 -192 48 -204 19 -6 20 -15 20 -125 0 -111 1 -120 22 -134 31
            -22 74 -20 98 4 11 11 20 23 20 28 0 4 4 66 10 137 5 72 16 258 25 415 15 289
            63 819 74 832 4 4 12 -86 19 -200 29 -489 77 -919 107 -952 24 -27 78 -27 103
            0 17 19 19 48 25 427 4 223 7 505 7 625 0 220 12 286 25 142 6 -57 0 -1053 -7
            -1247 -1 -38 28 -67 69 -67 42 0 73 30 73 70 0 20 5 30 15 30 9 0 27 11 41 25
            l26 26 -8 624 -7 625 32 0 c17 0 109 5 204 10 340 20 643 57 699 86 31 16 44
            51 32 86 -4 13 -8 39 -9 59 l-1 36 155 5 c161 5 195 12 206 48 6 18 15 20 120
            20 105 0 116 2 135 22 26 28 25 61 -2 92 -26 30 -47 32 -588 61 -157 8 -402
            27 -545 41 -268 26 -355 42 -235 43 91 1 588 38 750 56 303 34 343 41 362 65
            26 32 23 75 -7 98 -24 19 -51 20 -665 27 -352 4 -640 11 -640 15 0 21 571 24
            1359 7 39 0 71 30 71 70 0 31 -42 73 -74 73 -19 0 -27 7 -32 25 -14 58 8 56
            -683 49 l-634 -7 7 239 c3 131 11 325 17 429 12 210 7 282 -22 361 -39 104
            -103 141 -154 89 -24 -23 -25 -28 -26 -187 l-1 -163 -19 130 c-31 205 -55 312
            -78 341 -16 21 -21 42 -22 93 -1 240 -28 285 -144 245z"/>
            </g>
     </svg>  
     
    )

}

function Crown(props){

    

    return(
       
    <svg className = {props.className} version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="300" height="300" viewBox="0 0 1920.000000 1920.000000"
        preserveAspectRatio="xMidYMid meet">
       
            <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
            fill= {colorRandomize()} stroke="black">
            
            <path d="M12015 12626 c-62 -16 -117 -39 -154 -66 -24 -17 -34 -18 -60 -9 -44
            15 -93 4 -123 -29 -14 -15 -124 -232 -245 -482 -901 -1869 -1019 -2110 -1030
            -2108 -7 2 -81 56 -165 120 -120 92 -183 150 -296 271 -148 160 -393 393 -542
            515 -162 133 -218 155 -274 111 -15 -11 -31 -17 -38 -13 -7 4 -98 73 -203 153
            -258 199 -246 191 -297 191 -50 0 -82 -19 -103 -60 -24 -46 -18 -81 34 -202
            226 -528 535 -1498 840 -2638 111 -416 96 -397 296 -373 169 20 141 49 219
            -224 80 -282 83 -290 110 -308 41 -29 84 -19 175 44 156 106 303 168 512 215
            248 55 436 67 1414 91 1776 42 1911 46 1938 57 48 19 54 46 60 263 11 420 95
            740 388 1487 337 860 423 1165 450 1603 5 94 15 184 21 200 22 63 21 98 -6
            138 -14 21 -26 41 -26 46 0 4 -12 18 -26 32 -18 17 -37 24 -66 24 -38 0 -46
            -6 -107 -72 -62 -68 -89 -86 -496 -326 -236 -139 -617 -364 -845 -499 -228
            -135 -425 -250 -437 -257 -21 -11 -25 -2 -151 317 -215 540 -434 1146 -567
            1567 -72 228 -90 248 -200 221z m99 -533 c58 -174 105 -318 103 -320 -2 -2
            -19 29 -37 69 -18 40 -82 174 -142 298 l-109 225 26 23 c14 12 32 22 40 22 8
            0 50 -111 119 -317z m-155 -351 c107 -224 307 -641 444 -927 137 -286 258
            -539 269 -563 27 -56 60 -77 121 -77 l50 0 69 -160 c74 -173 98 -205 153 -205
            38 0 67 20 255 179 334 282 616 539 957 874 l212 209 -71 -164 c-248 -575
            -574 -1462 -883 -2398 -54 -162 -101 -298 -105 -303 -3 -4 -47 6 -96 22 -192
            62 -443 107 -780 138 -237 22 -1139 25 -1474 5 -312 -19 -715 -49 -945 -72
            -110 -10 -203 -16 -206 -12 -14 14 -285 891 -373 1202 -105 372 -230 919 -214
            935 2 3 166 -119 364 -270 390 -298 415 -323 493 -476 33 -65 38 -84 34 -121
            -4 -37 -1 -49 21 -75 30 -36 69 -46 112 -28 22 9 40 31 68 84 28 54 45 75 69
            85 18 7 37 19 43 27 7 8 129 257 272 554 143 297 309 641 369 765 60 124 212
            440 338 702 127 263 232 478 235 478 3 0 93 -184 199 -408z m2691 -1003 c-61
            -244 -168 -554 -342 -989 -283 -708 -390 -1096 -420 -1522 l-12 -168 -117 0
            -117 0 45 138 c171 528 435 1283 613 1757 177 470 373 948 378 923 2 -9 -11
            -71 -28 -139z m-740 39 c-282 -268 -786 -711 -803 -705 -9 3 -100 207 -95 212
            13 10 974 575 978 574 3 0 -33 -36 -80 -81z m-4900 -91 l105 -82 7 -60 c11
            -88 66 -384 94 -510 90 -400 212 -827 443 -1550 39 -120 69 -220 68 -222 -2
            -1 -21 -5 -43 -9 l-40 -6 -34 129 c-202 788 -509 1797 -709 2331 -36 97 -41
            98 109 -21z m3330 -2547 c293 -15 694 -64 740 -91 9 -5 -38 -9 -115 -9 -71 0
            -191 -3 -265 -5 -74 -3 -418 -12 -765 -20 -346 -9 -705 -20 -797 -25 -399 -24
            -681 -89 -931 -217 -59 -30 -109 -54 -111 -52 -1 2 -23 75 -48 162 -45 155
            -45 157 -24 162 30 6 319 32 626 55 225 16 392 25 810 43 175 8 707 6 880 -3z"/>
            </g>
     </svg> 
           
    )

}


function ScribbleStar(props){

   

    return(
    
    <svg style = {props.style}
    version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={props.width} height={props.height} viewBox="0 0 1920.000000 1920.000000"
        preserveAspectRatio="xMidYMid meet">
       
            <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
            fill= {colorRandomize()} stroke="black">
              <path d="M5686 8785 l-468 -255 -86 69 c-48 37 -159 126 -247 196 l-160 127
            -6 -68 c-4 -38 -7 -172 -8 -299 -1 -126 -4 -239 -7 -250 -3 -13 -138 -108
            -369 -260 -201 -132 -365 -243 -365 -247 0 -5 10 -8 21 -8 12 0 99 -7 193 -15
            94 -8 230 -20 301 -26 72 -6 166 -14 209 -17 l80 -7 17 -60 c10 -33 57 -203
            105 -377 48 -175 90 -318 94 -318 5 0 314 586 332 632 4 10 13 16 20 13 83
            -28 511 -155 514 -152 2 2 -52 147 -121 323 -69 175 -125 323 -125 327 0 7
            493 836 538 905 8 12 12 22 10 22 -2 0 -214 -115 -472 -255z"/>   
            </g>
     </svg>
            
    )

}




function Heart(props){
    
    
    return(


        
        <svg className = {props.className}   version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="300" height="300" viewBox="0 0 1920.000000 1920.000000"
        preserveAspectRatio="xMidYMid meet">
       
            <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
            fill={colorRandomize()} stroke="black">
        
            
            <path d="M2273 6010 c-185 -34 -366 -144 -479 -293 -138 -182 -204 -425 -204
            -751 0 -421 95 -778 315 -1186 249 -461 831 -1303 1169 -1689 53 -61 55 -66
            41 -87 -20 -30 -19 -88 1 -108 28 -28 63 -31 95 -7 l30 22 65 -61 c246 -230
            451 -304 618 -225 30 14 165 118 316 244 l264 219 23 -24 c26 -28 77 -32 104
            -8 10 9 32 58 49 110 l31 93 97 83 c518 442 850 797 1098 1174 256 388 348
            689 348 1134 0 255 -36 434 -119 600 l-33 65 119 127 c114 122 127 144 113
            183 -9 23 -60 46 -88 39 -13 -3 -70 -53 -126 -110 -57 -57 -105 -104 -107
            -104 -3 0 -31 24 -63 53 -177 159 -420 225 -684 186 -66 -10 -80 -9 -112 6
            -30 14 -40 15 -65 4 -17 -6 -36 -24 -44 -38 -10 -20 -32 -33 -97 -54 -304
            -104 -703 -358 -965 -616 -46 -45 -85 -81 -87 -81 -2 0 -38 51 -79 113 -115
            171 -237 318 -392 472 -258 258 -507 419 -765 494 -85 25 -299 37 -387 21z
            m211 -291 c12 0 16 -3 7 -6 -32 -13 -426 -571 -551 -782 -44 -73 -44 -74 -53
            -45 -9 33 -1 215 14 314 31 202 118 361 240 440 89 57 219 95 293 84 16 -2 38
            -4 50 -5z m249 -76 c53 -25 97 -50 97 -54 0 -5 -34 -56 -75 -114 -239 -336
            -452 -690 -638 -1060 -94 -187 -95 -189 -107 -160 -18 47 -67 224 -80 288
            l-12 59 103 171 c132 221 305 480 458 685 123 165 139 199 109 231 -22 23 37
            4 145 -46z m359 -243 c65 -55 120 -104 123 -109 3 -5 -59 -105 -138 -223 -248
            -371 -525 -819 -712 -1156 -49 -89 -93 -162 -97 -162 -10 0 -188 324 -188 344
            0 2 12 8 28 14 22 8 40 35 100 158 130 264 282 535 445 789 124 194 300 445
            312 445 6 0 63 -45 127 -100z m2443 -9 l30 -7 -31 -6 c-25 -6 -44 -26 -99
            -102 -86 -122 -240 -314 -446 -558 -284 -335 -357 -427 -554 -703 -146 -205
            -490 -722 -740 -1115 -333 -523 -390 -610 -396 -610 -10 0 -129 147 -129 160
            0 20 167 369 255 531 240 445 496 813 844 1213 184 213 342 441 608 884 l146
            242 81 26 c45 14 110 32 146 39 69 14 234 17 285 6z m126 -47 c26 -13 71 -45
            100 -73 51 -46 53 -50 38 -67 -151 -176 -387 -490 -529 -702 -161 -243 -348
            -557 -605 -1022 -375 -677 -589 -1023 -831 -1345 -62 -82 -123 -163 -136 -178
            l-24 -29 -59 45 c-33 25 -93 79 -134 121 l-75 75 31 48 c422 670 909 1413
            1119 1708 203 285 293 399 609 770 265 311 455 564 455 608 0 17 -10 38 -25
            53 -25 25 -25 25 -3 18 13 -3 44 -17 69 -30z m-977 -296 c-219 -357 -375 -582
            -507 -730 -315 -356 -611 -771 -837 -1178 -56 -101 -238 -463 -259 -517 -8
            -18 -17 -33 -21 -33 -4 0 -45 49 -90 110 l-82 109 83 163 c267 529 490 892
            816 1325 283 375 442 542 693 724 86 62 282 181 288 174 2 -2 -35 -68 -84
            -147z m-1236 -22 l45 -59 -47 -96 c-85 -170 -315 -599 -449 -836 -139 -246
            -399 -682 -427 -718 -18 -21 -19 -20 -114 125 l-97 147 25 49 c43 85 259 460
            380 661 141 232 254 409 430 674 l131 198 39 -43 c21 -24 59 -69 84 -102z
            m2479 -68 c15 -58 26 -135 30 -203 l5 -110 -262 -375 c-512 -731 -718 -1061
            -935 -1494 l-70 -141 -380 -317 c-209 -174 -381 -315 -383 -313 -2 2 28 45 66
            97 87 117 295 432 394 598 100 165 196 335 425 745 294 526 407 715 593 995
            182 273 466 638 483 621 5 -5 20 -51 34 -103z m-2297 -195 c18 -32 42 -72 52
            -90 19 -33 86 -97 108 -105 8 -2 -18 -44 -72 -114 -306 -392 -587 -837 -824
            -1301 l-103 -203 -47 68 c-26 37 -59 82 -72 101 -22 30 -24 36 -12 55 239 376
            669 1133 851 1499 41 81 76 147 79 147 3 0 21 -26 40 -57z m2296 -471 c-10
            -64 -61 -233 -94 -308 -75 -176 -300 -504 -493 -721 -61 -68 -242 -255 -289
            -298 l-33 -30 38 70 c78 143 228 387 367 595 151 228 500 730 507 730 2 0 1
            -17 -3 -38z"/>
            </g>
       </svg>
       

    )
}



export{Background, BackgroundCondensed}