import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = () => {

  const loggedIn = { firstName: "Angie"}


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS (1:16:34 **STOPPED HERE with vid: Build and Deploy a Banking App with Finance Management Dashboard Using Next.js 14
        youtuber: JavaScript Mastery)
      </div>
    </section>
  )
}

export default Home