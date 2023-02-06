const GETCONTACTS = `
    select
        c.*
    from contacts as c
    where case when $1 > 0 then c.contacts_id = $1 else true end
    order by c.contacts_id
`;

const POSTCONTACTS =`
insert into
    contacts(
        phone_number,room,kids,adults ,check_in,departure,email
    )
values
    ($1,$2,$3,$4,$5,$6,$7) returning *
`;

const PUTCONTACTS= `
    with old_contacts as (
        select
            contacts_id,
            phone_number,
            room,
            kids,
            adults,
            check_in,
            departure,
            email
        from contacts
        where contacts_id = $1    
    ) update contacts as c
        set
        phone_number = 
                case 
                    when length($2) > 1 then $2
                    else o.phone_number
                end,
        room = 
                case 
                    when length($3) > 1 then $3
                    else o.room
                end,
        kids = 
                case 
                    when length($4) > 1 then $4
                    else o.kids
                end,
        adults = 
                case 
                    when length($5) > 1 then $5
                    else o.adults
                end,
        check_in = 
                case 
                    when length($6) > 1 then $6
                    else o.check_in
                end,
        departure = 
                case 
                    when length($7) > 1 then $7
                    else o.departure
                end,
        email = 
                case 
                    when length($8) > 1 then $8
                    else o.email
                end
    from old_contacts as o   
    where c.contacts_id = $1
    returning c.*                 
`;


const DELETECONTACTS = `
delete from contacts
where contacts_id=$1 returning *
`;

export{
    GETCONTACTS,
    POSTCONTACTS,
    PUTCONTACTS,
    DELETECONTACTS
}