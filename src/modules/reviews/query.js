const GETREVIEWS = `
    select
        r.*
    from reviews as r
    where case when $1 > 0 then r.reviews_id = $1 else true end
    order by r.reviews_id
`;

const POSTREVIEWS =`
insert into
    reviews(
        avatar_image,description_uz,description_ru,description_en
    )
values
    ($1,$2,$3,$4) returning *
`;

const PUTREVIEWS = `
    with old_reviews as (
        select
            reviews_id,
            avatar_image,
            description_uz,
            description_ru,
            description_en
        from reviews
        where reviews_id = $1    
    ) update reviews as r
        set
        avatar_image = 
                case 
                    when length($2) > 1 then $2
                    else o.avatar_image
                end,
        description_uz = 
                case 
                    when length($3) > 1 then $3
                    else o.description_uz
                end,
        description_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.description_ru
                end,
        description_en = 
                case 
                    when length($5) > 1 then $5
                    else o.description_en
                end
    from old_reviews as o   
    where r.reviews_id = $1
    returning r.*                 
`;


const DELETEREVIEWS = `
delete from reviews
where reviews_id=$1 returning *
`;

export{
    GETREVIEWS,
    POSTREVIEWS,
    PUTREVIEWS,
    DELETEREVIEWS
}