#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    int cnt = 0;
    while (t--)
    {
        string s;
        cin >> s;

        if (s.find("CD") == string::npos)
            cnt++;
    }

    cout << cnt << endl;
    return 0;
}
