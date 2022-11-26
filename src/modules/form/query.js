const GETFORM = `
    select
        f.*
    from form_contact as f
    where case when $1 > 0 then f.form_id = $1 else true end
    order by f.form_id
`;

const POSTFORM =`
insert into
    form_contact(email,phone_number)
values
($1,$2) returning *
`;

const PUTFORM= `
    with old_form as (
        select
            form_id,
            email,
            phone_number
        from form_contact
        where form_id= $1    
    ) update form_contact as f 
        set
        email = 
                case 
                    when length($2) > 1 then $2
                    else o.email
                end,
        phone_number = 
                case 
                    when length($3) > 1 then $3
                    else o.phone_number
                end
    from old_form as o   
    where f.form_id = $1
    returning f.*                 
`;


const DELETEFORM = `
delete from form_contact
where form_id=$1 returning *
`;

export{
    GETFORM,
    POSTFORM,
    PUTFORM,
    DELETEFORM
}