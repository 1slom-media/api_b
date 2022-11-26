const GETGALERY = `
    select
        g.*
    from galery as g
    where case when $1 > 0 then g.galery_id = $1 else true end
    order by g.galery_id
`;

const POSTGALERY =`
insert into
    galery(image_galery)
values
($1) returning *
`;

const PUTGALERY = `
    with old_galery as (
        select
            galery_id,
            image_galery
        from galery
        where galery_id = $1    
    ) update galery as g 
        set
        image_galery = 
                case 
                    when length($2) > 1 then $2
                    else o.image_galery
                end
    from old_galery as o   
    where g.galery_id = $1
    returning g.*                 
`;


const DELETEGALERY = `
delete from galery
where galery_id=$1 returning *
`;

export{
    GETGALERY,
    POSTGALERY,
    PUTGALERY,
    DELETEGALERY
}