(function ($, m4a) {
    m4a.resources = {};

    $.extend(m4a.resources, {
        profiles: {
            "man_d": "No limitations",
            "wch_html": "Wheelchair width, cm",
            "wch_d": "I'm in a wheelchair",
            "wch_d2": "I'm in a ",
            "wch_d3": " cm wide wheelchair",
            "trl_html": "Trolley width, cm",
            "trl_d": "I am with a trolley",
            "trl_d2": "I am with a ",
            "trl_d3": " cm wide trolley"
        },
        routes: {
            "wch_w": "Wheelchair width upto ",
            "wch_w1": "",
            "wch_w2": " cm",
            "n_str": "No stairs",
            "stps": "Steps",
            "n_ramp": "Out of those, not covered by ramps or rails",
            "elev_y": "Elevator: yes",
            "elev_n": "No elevator",
            "elev_y_1": ", saves ",
            "elev_y_2": " steps",
            "min_max": "Min-max distance between wheels",
            "cm": " cm",
            "no_r": "No rails",
            "slope": "Slope",
            "no_lev_surf": "No leveled surfaces",
            "entr": "Entrance",
            "obt_arent_sh_en": "Obstacles aren't shown as the entrance is not selected",
            "exit": "Exit",
            "obt_arent_sh_ex": "Obstacles aren't shown as the exit is not selected"
        },
        inline: {
            "start_st": "Please select starting or destination station",
            "eq_st": "From station is equal to destination station",
            "st_st": "Choose start station",
            "end_st": "Choose destination station"
        }
    })
})(jQuery, m4a)