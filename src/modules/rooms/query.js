const GETROOMS = `
    select
        r.*
    from rooms as r
    where case when $1 > 0 then r.rooms_id = $1 else true end
    order by r.rooms_id
`;

const POSTROOMS =`
insert into
    rooms(
        image_room,
        title_room,
        area_room,
        number_guests,
        cost_night
    )
values
    ($1,$2,$3,$4,$5) returning *
`;

const PUTROOMS = `
    with old_rooms as (
        select
            rooms_id,
            image_room,
            title_room,
            area_room,
            number_guests,
            cost_night
        from rooms
        where rooms_id = $1    
    ) update rooms as r
        set
        image_room = 
                case 
                    when length($2) > 1 then $2
                    else o.image_room
                end,
        title_room = 
                case 
                    when length($3) > 1 then $3
                    else o.title_room
                end,
        area_room = 
                case 
                    when length($4) > 1 then $4
                    else o.area_room
                end,
        number_guests = 
                case 
                    when length($5) > 1 then $5
                    else o.number_guests
                end,
        cost_night = 
                case 
                    when length($6) > 1 then $6
                    else o.cost_night
                end
    from old_rooms as o   
    where r.rooms_id = $1
    returning r.*                 
`;


const DELETEROOMS = `
delete from rooms
where rooms_id=$1 returning *
`;

export{
    GETROOMS,
    POSTROOMS,
    PUTROOMS,
    DELETEROOMS
}