type AdminPageHeaderProps = {
  title: string;
};

export default function AdminPageHeader({ title }: AdminPageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      <form action="/admin/logout" method="post">
        <button
          type="submit"
          className="text-sm text-muted-foreground underline hover:text-foreground"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
