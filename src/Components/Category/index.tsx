type CategoryType = {
    title: string,
}

export const Category = ({ title }: CategoryType) => {
    return (
        <div className="section-container__category">
            <h1>{title}</h1>
        </div>
    )
}