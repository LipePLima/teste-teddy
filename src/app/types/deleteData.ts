
export function deleteData(cookieService: any) {
    cookieService.delete('username');
    cookieService.delete('password');
    cookieService.delete('checkbox');
}