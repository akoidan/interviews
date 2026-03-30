//go:generate light

type User interface {
    // UPDATE users
    // SET [username=?,]
    //     [phone=?,]
    //     [address=?,]
    //     [status=?,]
    //     [birthday=?,]
    //     updated=CURRENT_TIMESTAMP
    // WHERE id=?
    Update(u *model.User) (int64, error)
}
