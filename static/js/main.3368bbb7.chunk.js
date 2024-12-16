(this["webpackJsonprenq-platform"] =
  this["webpackJsonprenq-platform"] || []).push([
  [1],
  {
    175: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"name":"addETHReward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPoolSize","type":"uint256"},{"internalType":"uint256","name":"_maxContribution","type":"uint256"},{"internalType":"uint256","name":"_emergencyFee","type":"uint256"},{"internalType":"uint256","name":"_minContribution","type":"uint256"},{"internalType":"uint256","name":"_apy","type":"uint256"},{"internalType":"uint256","name":"_minLockDays","type":"uint256"},{"internalType":"bool","name":"_poolType","type":"bool"},{"internalType":"bool","name":"_poolActive","type":"bool"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whitelistAddresses","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimETHReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_lock","type":"bool"}],"name":"emergencyLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_rewardTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"TransferOwnerShip","type":"event"},{"inputs":[],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apy","type":"uint256"}],"name":"updateApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_emergencyFees","type":"uint256"}],"name":"updateEmergencyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxContribution","type":"uint256"}],"name":"updateMaxContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPoolSize","type":"uint256"}],"name":"updateMaxPoolSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minContribution","type":"uint256"}],"name":"updateMinContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockDays","type":"uint256"}],"name":"updateMinLockDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_poolActive","type":"bool"}],"name":"updatePoolActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_poolType","type":"bool"}],"name":"updatePoolType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawBEP20","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawEth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"claimableETHReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"claimableNativeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"claimableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"maxPoolSize","type":"uint256"},{"internalType":"uint256","name":"currentPoolSize","type":"uint256"},{"internalType":"uint256","name":"maxContribution","type":"uint256"},{"internalType":"uint256","name":"minContribution","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"},{"internalType":"uint256","name":"emergencyFees","type":"uint256"},{"internalType":"uint256","name":"minLockDays","type":"uint256"},{"internalType":"uint256","name":"totalTokenRewards","type":"uint256"},{"internalType":"uint256","name":"totalETHRewards","type":"uint256"},{"internalType":"uint256","name":"totalRewardsClaimed","type":"uint256"},{"internalType":"uint256","name":"totalETHRewardsClaimed","type":"uint256"},{"internalType":"bool","name":"poolType","type":"bool"},{"internalType":"bool","name":"poolActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardCurrentPoolSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardETHAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardETHCurrentPoolSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardETHTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardsClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakingTime","type":"uint256"},{"internalType":"uint256","name":"rewardClaimed","type":"uint256"},{"internalType":"uint256","name":"rewardETHClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'
      );
    },
    176: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    202: function (e, t, n) {},
    203: function (e, t, n) {},
    206: function (e, t, n) {},
    214: function (e, t, n) {},
    216: function (e, t) {},
    249: function (e, t, n) {},
    250: function (e, t, n) {},
    280: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(169),
        s = n.n(i),
        u = (n(202), n(16)),
        o = (n(203), n(204), n(205), n(40)),
        c = n(17),
        l = n(180),
        p = n(33),
        d = n(168),
        y = n(295),
        b = n(97),
        m = n(1),
        f = n(8),
        j = n(15),
        x = (n(206), n(41)),
        h = n(39),
        v = n.n(h),
        T = (n(214), n(9)),
        w = function (e) {
          var t = e.heading,
            n = e.value;
          return Object(T.jsx)("div", {
            className: "card",
            children: Object(T.jsx)("div", {
              className: "border-wrapper",
              children: Object(T.jsxs)("div", {
                className: "content",
                children: [
                  Object(T.jsx)("p", {
                    className: "card-heading",
                    children: t,
                  }),
                  Object(T.jsx)("p", {
                    className: "card-value letter-spacing-1",
                    children: n,
                  }),
                ],
              }),
            }),
          });
        },
        O = {
          97: {
            contract: "0xC4Cb6c49d75259929d13ff74C2eCC1a87544a484",
            token: "0xFa60D973F7642B748046464e165A65B7323b0DEE",
            router: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
            wallet: "0xF1BacAdbBDb30ae21765f2dEb89a4C5Bb2726675",
            explorerUrl: "https://testnet.bscscan.com/",
          },
          1: {
            contract: "0xb538022231265C8E7707CdaF9A07a3F85aC70cFc",
            token: "0xC5842df170b8C8D09EB851A8D5DB3dfa00669E3F",
            router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            wallet: "0xF1BacAdbBDb30ae21765f2dEb89a4C5Bb2726675",
            explorerUrl: "https://etherscan.io/",
          },
        },
        g = function () {
          var e,
            t = Object(c.i)().chain,
            n =
              (e = t && (null === t || void 0 === t ? void 0 : t.id)) && O[e]
                ? O[e]
                : O[1],
            a = n.contract,
            i = n.token,
            s = n.router,
            u = n.wallet,
            o = n.explorerUrl;
          return r.a.useMemo(
            function () {
              return {
                contract: a,
                token: i,
                router: s,
                wallet: u,
                explorerUrl: o,
              };
            },
            [null === t || void 0 === t ? void 0 : t.id, a, i, s, u, o]
          );
        },
        k = n(175),
        N = n(176),
        C = function () {
          var e = g();
          return function (t) {
            return Object(h.toast)(function (n) {
              return Object(T.jsxs)("div", {
                className: "toast",
                children: [
                  Object(T.jsx)("span", {
                    children: "Transaction Sent Successfully.",
                  }),
                  Object(T.jsxs)("div", {
                    className: "toast-btn-group",
                    children: [
                      Object(T.jsx)("a", {
                        target: "_blank",
                        href: "".concat(e.explorerUrl, "/tx/").concat(t),
                        rel: "noopener noreferrer",
                        className: "toast-btn",
                        children: "View",
                      }),
                      Object(T.jsx)("button", {
                        className: "toast-btn close",
                        onClick: function () {
                          return h.toast.dismiss(n.id);
                        },
                        children: "Dismiss",
                      }),
                    ],
                  }),
                ],
              });
            });
          };
        },
        A = n(136),
        M = {
          apy: 0,
          currentPoolSize: 0,
          emergencyFees: 0,
          maxContribution: 0,
          maxPoolSize: 0,
          minContribution: 0,
          minLockDays: 0,
          poolActive: !1,
          poolType: "",
          totalETHRewardsClaimed: 0,
          totalRewardsClaimed: 0,
        },
        S = {
          amount: 0,
          rewardClaimed: 0,
          rewardETHClaimed: 0,
          stakingTime: 0,
        };
      function E(e) {
        return 0 === e
          ? "--"
          : new Date(1e3 * e).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            });
      }
      function R(e) {
        return e
          ? {
              apy: Number(e.apy),
              poolType: e.poolType,
              poolActive: e.poolActive,
              currentPoolSize: B(e.currentPoolSize),
              emergencyFees: Number(e.emergencyFees),
              maxContribution: B(e.maxContribution),
              maxPoolSize: B(e.maxPoolSize),
              minContribution: B(e.minContribution),
              minLockDays: Number(e.minLockDays),
              totalETHRewardsClaimed: B(e.totalETHRewardsClaimed),
              totalRewardsClaimed: B(e.totalRewardsClaimed),
              totalTokenRewards: B(e.totalTokenRewards),
              totalETHRewards: B(e.totalETHRewards),
            }
          : {
              apy: 0,
              currentPoolSize: 0,
              emergencyFees: 0,
              maxContribution: 0,
              maxPoolSize: 0,
              minContribution: 0,
              minLockDays: 0,
              poolActive: !1,
              poolType: "",
              totalETHRewardsClaimed: 0,
              totalRewardsClaimed: 0,
              totalTokenRewards: 0,
              totalETHRewards: 0,
            };
      }
      var D = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9;
          return A.ethers.utils.parseUnits(e.toString(), t);
        },
        B = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9;
          return e ? Number(A.ethers.utils.formatUnits(e, t)).toFixed(4) : 0;
        },
        F = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return e
            ? Intl.NumberFormat("en-US", { maximumFractionDigits: t }).format(e)
            : "0";
        },
        H = n(296),
        P = (function () {
          var e = Object(f.a)(
            Object(m.a)().mark(function e(t) {
              var n;
              return Object(m.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t();
                    case 2:
                      return (n = e.sent), (e.next = 5), n.wait();
                    case 5:
                      if (0 !== e.sent.status) {
                        e.next = 8;
                        break;
                      }
                      throw new Error("Transaction failed");
                    case 8:
                      return e.abrupt("return", n.hash);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function z(e) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = Object(f.a)(
          Object(m.a)().mark(function e(t) {
            var n, a, r, i, s, u;
            return Object(m.a)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "0xC5842df170b8C8D09EB851A8D5DB3dfa00669E3F",
                        (e.prev = 1),
                        (r =
                          "https://api.dexscreener.com/latest/dex/tokens/".concat(
                            "0xC5842df170b8C8D09EB851A8D5DB3dfa00669E3F"
                          )),
                        (e.next = 5),
                        H.a.get(r)
                      );
                    case 5:
                      return (
                        (i = e.sent),
                        (s =
                          null === (n = i.data) ||
                          void 0 === n ||
                          null === (a = n.pairs[0]) ||
                          void 0 === a
                            ? void 0
                            : a.priceUsd),
                        (u = Number(s) * Number(t)),
                        e.abrupt("return", u)
                      );
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(1)),
                        console.error("Error fetching token price:", e.t0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 11]]
            );
          })
        )).apply(this, arguments);
      }
      var U = (function () {
          var e = Object(f.a)(
            Object(m.a)().mark(function e() {
              var t, n, a, r;
              return Object(m.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          "https://api.coinbase.com/v2/prices/ETH-USD/spot",
                          (e.next = 4),
                          H.a.get(
                            "https://api.coinbase.com/v2/prices/ETH-USD/spot"
                          )
                        );
                      case 4:
                        return (
                          (a = e.sent),
                          (r =
                            null === (t = a.data) ||
                            void 0 === t ||
                            null === (n = t.data) ||
                            void 0 === n
                              ? void 0
                              : n.amount),
                          e.abrupt("return", r)
                        );
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log("error: ", e.t0);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        L = function (e, t) {
          try {
            var n = (e.reason ? e.reason : e.error.data.message).split(":");
            if (n[n.length - 1]) return n[n.length - 1];
          } catch (r) {
            var a = null === e || void 0 === e ? void 0 : e.message;
            if (
              [
                "User rejected request",
                "User denied transaction signature",
                "user rejected transaction",
              ].some(function (e) {
                return a.includes(e);
              })
            )
              return "Transaction rejected by user";
          }
          return t || "Something went wrong, please try again!";
        },
        W = function (e) {
          var t = "",
            n = "";
          if ("emergency" === e)
            (n = "#DC4C64"),
              (t =
                "Are you sure you want to take out your tokens? You won't get any rewards.");
          else {
            if ("stake" !== e) throw new Error("Invalid type");
            (n = "#54B4D3"),
              (t =
                "It appears you have rewards available for claim. If you proceed, these rewards will be credited to your wallet.");
          }
          return function (e) {
            return v()(function (a) {
              return Object(T.jsxs)("div", {
                className: "toast",
                children: [
                  Object(T.jsx)("span", { children: t }),
                  Object(T.jsxs)("div", {
                    className: "toast-btn-group",
                    children: [
                      Object(T.jsx)("button", {
                        className: "toast-btn",
                        style: { background: n },
                        onClick: function () {
                          e(), v.a.dismiss(a.id);
                        },
                        children: "Confirm",
                      }),
                      Object(T.jsx)("button", {
                        className: "toast-btn close",
                        onClick: function () {
                          return v.a.dismiss(a.id);
                        },
                        children: "Dismiss",
                      }),
                    ],
                  }),
                ],
              });
            });
          };
        };
      window.ethers = x.ethers;
      var V = [0.25, 0.5, 0.75, 1],
        Y = function () {
          var e = g(),
            t = Object(c.c)().address,
            n = Object(c.c)().isConnected,
            r = Object(a.useState)(0),
            i = Object(j.a)(r, 2),
            s = i[0],
            u = i[1],
            o = C(),
            l = W("emergency"),
            d = W("stake"),
            y = Object(a.useState)(0),
            b = Object(j.a)(y, 2),
            h = b[0],
            O = b[1],
            A = Object(a.useState)(""),
            H = Object(j.a)(A, 2),
            I = H[0],
            Y = H[1],
            q = Object(a.useState)(M),
            K = Object(j.a)(q, 2),
            J = K[0],
            Z = K[1],
            X = Object(a.useState)(S),
            Q = Object(j.a)(X, 2),
            _ = Q[0],
            G = Q[1];
          console.log("userInfo: ", _);
          var $ = Object(a.useState)(0),
            ee = Object(j.a)($, 2),
            te = (ee[0], ee[1]),
            ne = Object(a.useState)(0),
            ae = Object(j.a)(ne, 2),
            re = ae[0],
            ie = ae[1];
          console.log("totalClaimedInUSD: ", re);
          var se = Object(a.useState)(0),
            ue = Object(j.a)(se, 2),
            oe = ue[0],
            ce = ue[1],
            le = Object(a.useState)(0),
            pe = Object(j.a)(le, 2),
            de = pe[0],
            ye = pe[1],
            be = Object(c.j)(),
            me = Object(c.l)().data,
            fe = Object(a.useMemo)(
              function () {
                return {
                  contract: new x.ethers.Contract(e.contract, k, me || be),
                  token: new x.ethers.Contract(e.token, N, me || be),
                };
              },
              [e, me, be]
            ),
            je = fe.contract,
            xe = fe.token,
            he = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  var t, n;
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), je.pool();
                          case 3:
                            (t = e.sent), (n = R(t)), Z(n), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log("error: ", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ve = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  var n, a;
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.prev = 2), (e.next = 5), je.userInfo(t);
                          case 5:
                            (n = e.sent),
                              (a = (r = n)
                                ? {
                                    amount: B(r.amount),
                                    rewardClaimed: B(r.rewardClaimed),
                                    rewardETHClaimed: B(r.rewardETHClaimed, 18),
                                    stakingTime: Number(r.stakingTime),
                                  }
                                : {
                                    amount: 0,
                                    rewardClaimed: 0,
                                    rewardETHClaimed: 0,
                                    stakingTime: 0,
                                  }),
                              G(a),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              console.log("error: ", e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                      var r;
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Te = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  var n, a, r;
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2), (e.next = 5), je.claimableRewards(t)
                            );
                          case 5:
                            return (
                              (n = e.sent),
                              (e.next = 8),
                              je.claimableETHReward(t)
                            );
                          case 8:
                            return (a = e.sent), (e.next = 11), xe.balanceOf(t);
                          case 11:
                            (r = e.sent),
                              te(B(n)),
                              ce(B(a, 18)),
                              O(B(r)),
                              (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(2)),
                              console.log("error: ", e.t0);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 17]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          function we(e) {
            return Oe.apply(this, arguments);
          }
          function Oe() {
            return (
              (Oe = Object(f.a)(
                Object(m.a)().mark(function n(a) {
                  return Object(m.a)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), xe.allowance(t, e.contract);
                        case 2:
                          if (!n.sent.gte(a)) {
                            n.next = 5;
                            break;
                          }
                          return n.abrupt("return", !0);
                        case 5:
                          return (
                            (n.next = 7),
                            v.a.promise(
                              P(function () {
                                return xe.approve(e.contract, a);
                              }),
                              {
                                loading: "Approving...",
                                success: "Approved",
                                error: function (e) {
                                  return L(e, "Approval failed");
                                },
                              }
                            )
                          );
                        case 7:
                          return n.abrupt("return", !0);
                        case 8:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )),
              Oe.apply(this, arguments)
            );
          }
          function ge() {
            return ke.apply(this, arguments);
          }
          function ke() {
            return (ke = Object(f.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(oe > 0)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", d(Ae));
                      case 2:
                        return (e.next = 4), Ae();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Ne() {
            return Ce.apply(this, arguments);
          }
          function Ce() {
            return (Ce = Object(f.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), xe.balanceOf(t);
                      case 2:
                        if (!(e.sent < J.minContribution)) {
                          e.next = 6;
                          break;
                        }
                        throw (
                          (v.a.error("Insufficient balance"),
                          new Error("Insufficient balance"))
                        );
                      case 6:
                        return e.abrupt("return", !0);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Ae() {
            return Me.apply(this, arguments);
          }
          function Me() {
            return (Me = Object(f.a)(
              Object(m.a)().mark(function e() {
                var t, n;
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ne();
                      case 2:
                        if (I) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          v.a.error("Enter Stake Amount")
                        );
                      case 4:
                        return (t = D(I)), (e.next = 7), we(t);
                      case 7:
                        if (e.sent) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");
                      case 10:
                        return (
                          (n = P(function () {
                            return je.stakeTokens(t);
                          })),
                          (e.next = 13),
                          v.a.promise(n, {
                            loading: "Staking...",
                            success: function (e) {
                              return o(e), "Staked Successfully";
                            },
                            error: function (e) {
                              return L(e, "Stake failed");
                            },
                          })
                        );
                      case 13:
                        return Y(""), (e.next = 16), ze();
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Se() {
            return Ee.apply(this, arguments);
          }
          function Ee() {
            return (Ee = Object(f.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v.a.promise(
                            P(function () {
                              return je.unstakeTokens();
                            }),
                            {
                              loading: "Unstaking...",
                              success: "Tokens UnStaked Successfully",
                              error: function (e) {
                                return L(e, "UnStake failed");
                              },
                            }
                          )
                        );
                      case 2:
                        return (e.next = 4), ze();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Re() {
            return De.apply(this, arguments);
          }
          function De() {
            return (De = Object(f.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v.a.promise(
                            P(function () {
                              return je.emergencyWithdraw();
                            }),
                            {
                              loading: "Withdrawing...",
                              success: "Withdrawn Successfully",
                              error: function (e) {
                                return L(e, "Emergency withdraw failed");
                              },
                            }
                          )
                        );
                      case 2:
                        return (e.next = 4), ze();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Be() {
            return Fe.apply(this, arguments);
          }
          function Fe() {
            return (Fe = Object(f.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v.a.promise(
                            P(function () {
                              return je.claimETHReward();
                            }),
                            {
                              loading: "Claiming...",
                              success: "Claimed Successfully",
                              error: function (e) {
                                return L(e, "Claim failed");
                              },
                            }
                          )
                        );
                      case 2:
                        return (e.next = 4), ze();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var He = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  var t;
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), z(J.currentPoolSize)
                            );
                          case 3:
                            (t = e.sent), ye(t), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log("error: ", e.t0);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Pe = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  var t, n;
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), U();
                          case 3:
                            (t = e.sent),
                              (n = Number(_.rewardETHClaimed) * Number(t)),
                              ie(n),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log("error: ", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ze = (function () {
              var e = Object(f.a)(
                Object(m.a)().mark(function e() {
                  return Object(m.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), he();
                        case 2:
                          return (e.next = 4), ve();
                        case 4:
                          return (e.next = 6), Te();
                        case 6:
                          return (e.next = 8), Ie();
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ie = Object(a.useCallback)(
              Object(f.a)(
                Object(m.a)().mark(function e() {
                  return Object(m.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !(J.currentPoolSize > 0))) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), He();
                          case 4:
                            if (!(_.rewardETHClaimed > 0)) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 7), Pe();
                          case 7:
                            e.next = 12;
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log("error: ", e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              ),
              [J, _]
            );
          return (
            Object(a.useEffect)(
              function () {
                Ie();
              },
              [Ie]
            ),
            Object(a.useEffect)(function () {
              ze();
            }, []),
            Object(T.jsx)(T.Fragment, {
              children: Object(T.jsx)("div", {
                className: "main-container",
                children: Object(T.jsxs)("div", {
                  className: "token-container-wrapper",
                  children: [
                    Object(T.jsxs)("div", {
                      className: "upper-box-group",
                      children: [
                        Object(T.jsx)(w, {
                          heading: "Token Value Locked",
                          value: "$" + F(de),
                        }),
                        Object(T.jsx)(w, {
                          heading: "Total Tokens Staked",
                          value: F(J.currentPoolSize),
                        }),
                        Object(T.jsx)(w, {
                          heading: "Total Claimed ETH Value",
                          value: "$" + F(re),
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "left-box-group",
                      children: [
                        Object(T.jsx)(w, {
                          heading: "My Balance",
                          value: F(h),
                        }),
                        Object(T.jsx)(w, {
                          heading: "My Stake Balance",
                          value: F(_.amount),
                        }),
                        Object(T.jsx)(w, {
                          heading: "Total ETH Claimed",
                          value: Number(_.rewardETHClaimed).toFixed(4),
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "right-box-group",
                      children: [
                        Object(T.jsx)(w, {
                          heading: "Early Unstake Fee",
                          value: "".concat(J.emergencyFees / 10, "%"),
                        }),
                        Object(T.jsx)(w, {
                          heading: "APY Rate",
                          value: "Dynamic",
                        }),
                        Object(T.jsx)(w, {
                          heading: "Locked at",
                          value: E(_.stakingTime),
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "tab-pannel mob",
                      children: [
                        Object(T.jsx)("button", {
                          className: "tab btn ".concat(0 === s ? "btn-1" : ""),
                          onClick: function () {
                            return u(0);
                          },
                          children: "Stake",
                        }),
                        Object(T.jsx)("button", {
                          className: "tab btn ".concat(1 === s ? "btn-2" : ""),
                          onClick: function () {
                            return u(1);
                          },
                          children: "Unstake",
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "data-info mob",
                      children: [
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Token Value Locked",
                            }),
                            Object(T.jsxs)("div", {
                              className: "col text-gray",
                              children: ["$", F(de)],
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Total Tokens Staked",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: F(J.currentPoolSize),
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Total Claimed ETH Value",
                            }),
                            Object(T.jsxs)("div", {
                              className: "col text-gray",
                              children: ["$", F(re)],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "data-info mob",
                      children: [
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "My Balance",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: F(h),
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "My Stake Balance",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: F(_.amount),
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Total ETH Claimed",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: Number(_.rewardETHClaimed).toFixed(4),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "token-container gradient-border",
                      children: [
                        Object(T.jsxs)("h6", {
                          className: "midStyle",
                          style: { paddingTop: "1rem", fontSize: "1rem" },
                          children: [
                            "Minimum lock period: ",
                            J.minLockDays,
                            " days",
                          ],
                        }),
                        Object(T.jsx)("div", {
                          className: "pol-creater-wrapper",
                          children: Object(T.jsxs)("div", {
                            className: "payment-option-container",
                            children: [
                              Object(T.jsx)(T.Fragment, {
                                children: Object(T.jsxs)("div", {
                                  style: {
                                    position: "relative",
                                    display: "inline-block",
                                  },
                                  children: [
                                    Object(T.jsx)("input", {
                                      style: {
                                        border: "2px solid white",
                                        paddingRight: "30px",
                                        color: "#fff",
                                        borderRadius: "20px",
                                      },
                                      type: "number",
                                      inputMode: "numeric",
                                      value: I,
                                      placeholder: "0.00",
                                      onChange: function (e) {
                                        return Y(e.target.value);
                                      },
                                    }),
                                    Object(T.jsx)("button", {
                                      className: "gradient-border ".concat(
                                        0 !== s ? "border-tab-1" : "",
                                        " "
                                      ),
                                      style: {
                                        position: "absolute",
                                        top: "2px",
                                        right: "1px",
                                        height: "90%",
                                        width: "60px",
                                        fontWeight: "bold",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "black",
                                        color: "white",
                                        borderRadius: "12px",
                                      },
                                      onClick: function () {
                                        return Y(h);
                                      },
                                      children: "MAX",
                                    }),
                                  ],
                                }),
                              }),
                              Object(T.jsx)("div", {
                                className: "payment-opt-btn-group amount",
                                children: V.map(function (e) {
                                  return Object(T.jsxs)(
                                    "button",
                                    {
                                      className: "gradient-border ".concat(
                                        0 !== s ? "border-tab-1" : ""
                                      ),
                                      style: {
                                        borderRadius: "12px",
                                        backgroundColor: "black",
                                      },
                                      onClick: function () {
                                        return Y(h * e);
                                      },
                                      children: [100 * e, "%"],
                                    },
                                    e
                                  );
                                }),
                              }),
                              n
                                ? Object(T.jsxs)(T.Fragment, {
                                    children: [
                                      Object(T.jsxs)("div", {
                                        className: "btn-group-desk",
                                        children: [
                                          Object(T.jsxs)("div", {
                                            className: "gradientButton",
                                            children: [
                                              Object(T.jsx)("button", {
                                                onClick: ge,
                                                style: {
                                                  width: "49%",
                                                  background:
                                                    "linear-gradient(120deg, #ff3bff, #ecbfbf, #5c24ff)",
                                                  borderRadius: "100px",
                                                  padding: "13px",
                                                  fontSize: "16px",
                                                  fontWeight: "bold",
                                                },
                                                children: "Stake",
                                              }),
                                              Object(T.jsx)("button", {
                                                onClick: Se,
                                                style: {
                                                  width: "49%",
                                                  background:
                                                    "linear-gradient(120deg, #ff3bff, #ecbfbf, #5c24ff)",
                                                  borderRadius: "100px",
                                                  padding: "13px",
                                                  fontSize: "16px",
                                                  fontWeight: "bold",
                                                },
                                                children: "Unstake",
                                              }),
                                            ],
                                          }),
                                          Object(T.jsxs)("div", {
                                            children: [
                                              Object(T.jsx)("button", {
                                                onClick: function () {
                                                  return l(Re);
                                                },
                                                style: {
                                                  width: "100%",
                                                  background:
                                                    "linear-gradient(120deg, #ff3bff, #ecbfbf, #5c24ff)",
                                                  borderRadius: "100px",
                                                  padding: "13px",
                                                  fontSize: "16px",
                                                  fontWeight: "bold",
                                                  marginBlock: "1rem",
                                                },
                                                children: "Emergency Withdraw",
                                              }),
                                              Object(T.jsxs)("div", {
                                                className: "gradientButton",
                                                children: [
                                                  Object(T.jsxs)("div", {
                                                    children: [
                                                      Object(T.jsx)("h4", {
                                                        style: {
                                                          color: "white",
                                                        },
                                                        children:
                                                          "Claimable Reward",
                                                      }),
                                                      Object(T.jsxs)("h4", {
                                                        style: {
                                                          color: "white",
                                                        },
                                                        children: [oe, " ETH"],
                                                      }),
                                                    ],
                                                  }),
                                                  Object(T.jsx)("button", {
                                                    onClick: Be,
                                                    className:
                                                      "gradient-border",
                                                    style: {
                                                      width: "max-content",
                                                      background:
                                                        "linear-gradient(120deg, #ff3bff, #ecbfbf, #5c24ff)",
                                                      borderRadius: "100px",
                                                      padding: "13px",
                                                      fontSize: "16px",
                                                      fontWeight: "bold",
                                                    },
                                                    children: "Claim ETH",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(T.jsxs)("div", {
                                        className: "btn-group-mob",
                                        children: [
                                          0 === s
                                            ? Object(T.jsx)("button", {
                                                onClick: ge,
                                                style: {
                                                  width: "100%",
                                                  background:
                                                    "linear-gradient(99deg, #FF3BFF 0%, #ECBFBF 100%)",
                                                  borderRadius: "12px",
                                                  padding: "13px",
                                                  fontSize: "1rem",
                                                  border: "none",
                                                  fontWeight: "bold",
                                                },
                                                children: "Stake",
                                              })
                                            : Object(T.jsxs)("div", {
                                                style: {
                                                  display: "grid",
                                                  gap: "1rem",
                                                },
                                                children: [
                                                  Object(T.jsx)("button", {
                                                    onClick: Se,
                                                    style: {
                                                      width: "100%",
                                                      background:
                                                        "linear-gradient(180deg, rgba(48, 16, 128, 0.60) 0%, rgba(120, 64, 173, 0.36) 100%), #FFF",
                                                      borderRadius: "12px",
                                                      padding: "13px",
                                                      fontSize: "1rem",
                                                      border: "none",
                                                      fontWeight: "bold",
                                                    },
                                                    children: "Unstake",
                                                  }),
                                                  Object(T.jsx)("button", {
                                                    onClick: function () {
                                                      return l(Re);
                                                    },
                                                    style: {
                                                      width: "100%",
                                                      background:
                                                        "linear-gradient(180deg, rgba(48, 16, 128, 0.60) 0%, rgba(120, 64, 173, 0.36) 100%), #FFF",
                                                      borderRadius: "12px",
                                                      padding: "13px",
                                                      fontSize: "1rem",
                                                      border: "none",
                                                      fontWeight: "bold",
                                                    },
                                                    children:
                                                      "Emergency Withdraw",
                                                  }),
                                                ],
                                              }),
                                          Object(T.jsxs)("div", {
                                            className: "mob-claim-btn",
                                            children: [
                                              Object(T.jsxs)("div", {
                                                children: [
                                                  Object(T.jsx)("h4", {
                                                    style: { color: "white" },
                                                    children:
                                                      "Claimable Reward",
                                                  }),
                                                  Object(T.jsxs)("h4", {
                                                    style: { color: "white" },
                                                    children: [oe, " ETH"],
                                                  }),
                                                ],
                                              }),
                                              Object(T.jsx)("button", {
                                                onClick: Be,
                                                style: {
                                                  width: "100%",
                                                  color: "white",
                                                  background: "transparent",
                                                  borderRadius: "12px",
                                                  padding: "13px",
                                                  fontSize: "1rem",
                                                  border: "1px solid white",
                                                  fontWeight: "bold",
                                                },
                                                children: "Claim ETH",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : Object(T.jsx)("div", {
                                    className: "connect-wallet",
                                    children: Object(T.jsx)(p.a, {
                                      chainStatus: "none",
                                    }),
                                  }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(T.jsxs)("div", {
                      className: "data-info mob",
                      children: [
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Early Unstake Fee",
                            }),
                            Object(T.jsxs)("div", {
                              className: "col text-gray",
                              children: [J.emergencyFees / 10, "%"],
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "APY Rate",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: "Dynamic",
                            }),
                          ],
                        }),
                        Object(T.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(T.jsx)("div", {
                              className: "col text-bold",
                              children: "Locked at",
                            }),
                            Object(T.jsx)("div", {
                              className: "col text-gray",
                              children: E(_.stakingTime),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        q =
          (n(249),
          function (e) {
            var t = e.ConnectButton;
            return Object(T.jsx)("header", {
              className: "header",
              children: Object(T.jsxs)("nav", {
                className: "nav",
                children: [
                  Object(T.jsx)("div", {
                    className: "left-nav",
                    children: Object(T.jsx)("div", {
                      className: "logo",
                      onClick: function () {},
                      children: Object(T.jsx)("img", {
                        src: "/static/arcan.png",
                        alt: "logo",
                      }),
                    }),
                  }),
                  Object(T.jsx)("div", {
                    className: "menu",
                    children: Object(T.jsx)(t, { chainStatus: "none" }),
                  }),
                ],
              }),
            });
          }),
        K =
          (n(250),
          function () {
            return Object(T.jsxs)("div", {
              className: "info",
              children: [
                Object(T.jsxs)("span", {
                  className: "infoHeading",
                  style: { textAlign: "center" },
                  children: [
                    Object(T.jsx)("span", {
                      className: "gradienText",
                      children: "ARCAN",
                    }),
                    " ",
                    Object(T.jsx)("span", {
                      className: "NormalText",
                      children: "STAKING & CLAIM",
                    }),
                  ],
                }),
                Object(T.jsx)("p", {
                  className: "infoPara",
                  style: { color: "white" },
                  children:
                    "Arcanum AI is revolutionizing the way we create content with our groundbreaking text-to-video Telegram bot, powered by our unique ARBP technology for unmatched accuracy. Built entirely in-house, our models stand out for their efficiency, with no reliance on standard APIs. Reap early investor advantage now!",
                }),
              ],
            });
          }),
        J = Object(o.h)([l.b], [Object(y.a)()]),
        Z = J.chains,
        X = J.provider,
        Q = Object(b.b)({
          appName: "My RainbowKit App",
          projectId: "cc1c5638e9c1b3fd51cc96a66e4f40b4",
          chains: Z,
        }).wallets,
        _ = Object(b.a)(Object(u.a)(Q)),
        G = Object(c.b)({ autoConnect: !0, connectors: _, provider: X });
      var $ = function () {
          return Object(T.jsx)(T.Fragment, {
            children: Object(T.jsx)(c.a, {
              client: G,
              children: Object(T.jsx)(p.d, {
                initialChain: 1,
                chains: Z,
                theme: Object(d.a)({
                  accentColor: "#332d53",
                  accentColorForeground: "white",
                  overlayBlur: "small",
                  borderRadius: "medium",
                }),
                children: Object(T.jsxs)("div", {
                  className: "heroBackGround",
                  children: [
                    Object(T.jsx)(q, { ConnectButton: p.a }),
                    Object(T.jsx)(K, {}),
                    Object(T.jsx)(Y, {}),
                    Object(T.jsx)(h.Toaster, {}),
                  ],
                }),
              }),
            }),
          });
        },
        ee = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(39)
              .then(n.bind(null, 840))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), r(e), i(e), s(e);
              });
        },
        te = n(179),
        ne = n(120);
      (window.Buffer = window.Buffer || ne.Buffer),
        s.a
          .createRoot(document.getElementById("root"))
          .render(
            Object(T.jsx)(te.a, {
              children: Object(T.jsx)(r.a.StrictMode, {
                children: Object(T.jsx)($, {}),
              }),
            })
          ),
        ee();
    },
  },
  [[280, 2, 4]],
]);
//# sourceMappingURL=main.3368bbb7.chunk.js.map
