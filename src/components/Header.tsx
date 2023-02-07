interface HeaderProps{
    genretitle: string
}

export function Header({ genretitle }: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {genretitle}</span></span>
        </header>
    )
}